import { Editor, getEventTransfer } from 'slate-react'
import { Block, Value } from 'slate'

import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import initialValueAsJson from './value.json'
import imageExtensions from 'image-extensions'
import isUrl from 'is-url'
import { css } from 'emotion'
import { Button, Icon, Toolbar, Menu } from './components'
import classNames from 'classnames'
import styles from "./MarkDownShortcuts.css"

const cx = classNames.bind(styles)
const initialValue = Value.fromJSON(initialValueAsJson)

class MarkdownShortcuts extends Component {
    state = {
        value: initialValue
    }
    /**
     * Get the block type for a series of auto-markdown shortcut 'chars'.
     * 
     * @param {String} chars
     * @return {String} block
     */

    getType = chars => {
        switch (chars) {
            case '*':
            case '-':
            case '+':
                return 'list-item'
            case '>':
                return 'block-quote'
            case '#':
                return 'heading-one'
            case '##':
                return 'heading-two'
            case '###':
                return 'heading-three'
            case '####':
                return 'heading-four'
            case '#####':
                return 'heading-five'
            case '######':
                return 'heading-six'
            default:
                return null
        }
    }



    menuRef = React.createRef()
    /**
     * On update, update the menu.
     */

    componentDidMount = () => {
        this.updateMenu()
    }

    componentDidUpdate = () => {
        this.updateMenu()
    } 

    /**
     * Update the menu's absolue position.
     */

    updateMenu = () => {
        const menu = this.menuRef.current
        if (!menu) return

        const { value } = this.state
        const { fragment, selection } = value

        if (selection.isBlurred || selection.isCollapsed || fragment.text === '') {
            menu.removeAttribute('style')
            return
        }

        const native = window.getSelection()
        const range = native.getRangeAt(0)
        const rect = range.getBoundingClientRect()
        menu.style.top = `${rect.top + window.pageYOffset - menu.offsetHeight}px`

        menu.style.left = `${rect.left + window.pageXOffset - menu.offsetWidth / 2 + rect.width / 2}px`
    }

    ref = editor => {
        this.editor = editor
    }

    /**
     * Render.
     * 
     * @return {Component} component
     */ 

    render() {
        return (
            <div>
                <Toolbar>
                    <Button onMouseDown={this.onClickImage}>
                        <Icon>image</Icon>
                    </Button>
                </Toolbar>

                <Editor
                    placeholder="Write some markdown..."
                    defaultValue={initialValue}
                    onKeyDown={this.onKeyDown}
                    ref={this.ref}
                    schema={schema}
                    onDrop={this.onDropOrPaste}
                    onPaste={this.onDropOrPaste}
                    renderBlock={this.renderBlock}
                    onChange={this.onChange}
                    renderEditor={this.renderEditor}
                    renderMark={this.renderMark}
                />
            </div>
        )
    }

    /**
     * Render a Slate block.
     * 
     * @param {Object} props
     * @param {Editor} Editor
     * @param {Function} next
     * @return {Element}
     */

    renderBlock = (props, editor, next) => {
        const { attributes, children, node, isFocused } = props

        switch (node.type) {
            case 'block-quote':
                return <blockquote
                    className={cx('blockquote')}
                    {...attributes}>{children}</blockquote>
            case 'bulleted-list':
                return <ul {...attributes}>{children}</ul>
            case 'heading-one':
                return <h1 {...attributes}>{children}</h1>
            case 'heading-two':
                return <h2 {...attributes}>{children}</h2>
            case 'heading-three':
                return <h3 {...attributes}>{children}</h3>
            case 'heading-four':
                return <h4 {...attributes}>{children}</h4>
            case 'heading-five':
                return <h5 {...attributes}>{children}</h5>
            case 'heading-six':
                return <h6 {...attributes}>{children}</h6>
            case 'list-item':
                return <li {...attributes}>{children}</li>
            case 'image': {
                const src = node.data.get('src')
                return (
                    <img
                        {...attributes}
                        src={src}
                        className={css`
                            display: block;
                            max-width: 100%;
                            max-height: 20em;
                            box-shadow: ${isFocused ? '0 0 0 2px blue;' : 'none'};
                        `}
                        alt=""
                    />
                )
            }
            default:
                return next()
        }
    }

    /**
     * On key down, check for our specific key shortcuts.
     * 
     * @param {Event} Event
     * @param {Editor} editor
     * @param {Function} next
     */

    onKeyDown = (event, editor, next) => {
        switch (event.key) {
            case ' ':
                return this.onSpace(event, editor, next)
            case 'Backspace':
                return this.onBackSpace(event, editor, next)
            case 'Enter':
                return this.onEnter(event, editor, next)
            default:
                return next()
        }
    }

    /**
     * On space, if it was after an auto-markdown shortcut, convert the current
     * node into the shortcut's corrersponding type.
     * 
     * @param {Event} event
     * @param {Editor} editor
     * @param {Function} next
     */


    onSpace = (event, editor, next) => {
        const { value } = editor
        const { selection } = value
        if (selection.isExpanded) return next()

        const { startBlock } = value
        const { start } = selection
        const chars = startBlock.text.slice(0, start.offset).replace(/\s*/g, '')
        const type = this.getType(chars)
        if (!type) return next()
        if (type === 'list-item' && startBlock.type === 'list-item') return next()
        event.preventDefault()

        editor.setBlocks(type)

        if (type === 'list-item') {
            editor.wrapBlock('bulleted-list')
        }

        editor.moveFocusToStartOfNode(startBlock).delete()
    }

    /**
     * On backspace, if at the start of a non-paragraph, convert it back into a
     * paragraph node.
     * 
     * @param {Event} event
     * @param {Editor} editor
     * @param {Function} next
     */

    onBackSpace = (event, editor, next) => {
        const { value } = editor
        const { selection } = value
        if (selection.isExpanded) return next()
        if (selection.start.offset !== 0) return next()

        const { startBlock } = value
        if (startBlock.type === 'paragraph' ) return next()

        event.preventDefault()
        editor.setBlocks('paragraph')

        if (startBlock.type === 'list-item') {
            editor.unwrapBlock('bulleted-list')
        }
    }

    /**
     * On return, if at the end of a node type that should not be extended,
     * create a new paragraph below it.
     * 
     * @param {Event} event
     * @param {Editor} editor
     * @param {Function} next
     */

    onEnter = (event, editor, next) => {
        const { value } = editor
        const { selection } = value
        const { start, end, isExpanded } = selection
        if (isExpanded) return next()

        const { startBlock } = value
        if (start.offset === 0 && startBlock.text.length === 0)
            return this.onBackSpace(event, editor, next)
        if (end.offset !== startBlock.text.length) return next()

        if (
            startBlock.type !== 'heading-one' &&
            startBlock.type !== 'heading-two' &&
            startBlock.type !== 'heading-three' &&
            startBlock.type !== 'heading-four' &&
            startBlock.type !== 'heading-five' &&
            startBlock.type !== 'heading-six' &&
            startBlock.type !== 'block-quote'
        ) {
            return next()
        }

        event.preventDefault()
        editor.splitBlock().setBlocks('paragraph')
    }

    /**
     * On clicking the image button, prompt for an image and insert it.
     * 
     * @param {Event} event
     */

    onClickImage = event => {
        event.preventDefault()
        const src = window.prompt('Enter the URL of the image:')
        if (!src) return
        this.editor.command(insertImage, src)
    }

    /**
     * On drop, insert the image wherever it is dropped.
     * 
     * @param {Event} event
     * @param {Editor} editor
     * @param {Function} next
     */

    onDropOrPaste = (event, editor, next) => {
        const target = editor.findEventRange(event)
        if (!target && event.type === 'drop') return next()
        if (target.isBackward === null) return // 이미지 속으로 드롭 에러 방지
        const transfer = getEventTransfer(event)
        const { type, text, files } = transfer
        
        if (type === 'files') {
            console.log('files')
            for (const file of files) {
                const reader = new FileReader()
                const [mime] = file.type.split('/')
                if (mime !== 'image') continue

                reader.addEventListener('load', () => {
                    editor.command(insertImage, reader.result, target)
                })

                reader.readAsDataURL(file)
            }
            return
        }
        if (type === 'text') {
            console.log('text')
            if (!isUrl(text)) return next()
            if (!isImage(text)) return next()
            editor.command(insertImage, text, target)
            return
        }

        next()
    }

    /** Render the editor.
     * 
     * @param {Object} props
     * @param {Function} next
     * @return {Element}
     */

    renderEditor = (props, editor, next) => {
        const children = next()
        return (
            <React.Fragment>
                {children}
                <HoverMenu ref={this.menuRef} editor={editor} />
            </React.Fragment>
        )
    }

    /**
     * Render a Slate mark.
     * 
     * @param {Object} props
     * @param {Editor} editor
     * @param {Function} next
     * @return {Element}
     */

    renderMark = (props, editor, next) => {
        const { children, mark, attributes } = props

        switch (mark.type) {
            case 'bold':
                return <strong {...attributes}>{children}</strong>
            case 'code':
                return <code {...attributes}>{children}</code>
            case 'italic':
                return <em {...attributes}>{children}</em>
            case 'underlined':
                return <u {...attributes}>{children}</u>
            default:
                return next()
        }
    }

    /**
     * On change.
     * 
     * @param {Editor} editor
     */

     onChange = ({ value }) => {
         this.setState({ value })
     }
}



/**
 * A function to determine whether a URL has an image extension.
 * 
 * @param {String} url
 * @return {Boolean}
 */

function isImage(url) {
    return imageExtensions.includes(getExtension(url))
}

/**
 * Get the extension of the URL, using the URL API.
 * 
 * @param {String} url
 * @return {String}
 */

 function getExtension(url) {
     return new URL(url).pathname.split('.').pop()
 }

 /**
  * A change function to standardize inserting images.
  * @param {Editor} editor
  * @param {String} src
  * @param {Range} target
  */

function insertImage(editor, src, target) {
    if (target) {
        editor.select(target)
    }
    // console.log(target)

    editor.insertBlock({
        type: 'image',
        data: { src },
    })
}

/**
 * The editor's schema.
 * 
 * @type {Object}
 */

const schema= {
    document: {
        last: { tyle: 'paragraph'},
        normalize: (editor, { code, node, child }) => {
            switch (code) {
                case 'last_child_type_invalid': {
                    console.log('얍얍얍')
                    const paragraph = Block.create('paragraph')
                    return editor.insertNodeByKey(node.key, node.nodes.size, paragraph)
                }

            }
        },
    },
    blocks: {
        image: {
            isVoid: true,
        },
    },
}


/*******
 * Hovering vars
 *******/

const MarkButton = ({ editor, type, icon }) => {
    const { value } = editor
    const isActive = value.activeMarks.some(mark => mark.type === type)
    return (
        <Button
            reversed
            active={isActive}
            onMouseDown={event => {
                event.preventDefault()
                editor.toggleMark(type)
            }}
        >
            <Icon>{icon}</Icon>
        </Button>
    )
}

const HoverMenu = React.forwardRef(({ editor }, ref) => {
    const root = window.document.querySelector('#root')
    return ReactDOM.createPortal(
        <Menu
            ref={ref}
            className={css`
                padding: 8px 7px 6px;
                position: absolute;
                z-index: 1;
                top: -10000px;
                left: -10000px;
                margin-top: -6px;
                opacity: 0;
                background-color: #222;
                border-radius: 4px;
                transition: opacity 0.75s;
            `}
        >
            <MarkButton editor={editor} type="bold" icon="format_bold" />
            <MarkButton editor={editor} type="italic" icon="format_italic" />
            <MarkButton editor={editor} type="underlined" icon="format_underlined" />
            <MarkButton editor={editor} type="code" icon="format_code" />
        </Menu>,
        root
    )
})

export default MarkdownShortcuts