import React from 'react'
import './taskmodal.scss'

export default class Taskmodal extends React.Component {

    constructor(props) {
        super(props)
        this.clearInputValue = this.clearInputValue.bind(this)
        this.state = {
            inputDefaultValue : this.props.task.content
        }
    }

    clearInputValue() {
        this.setState({
            inputDefaultValue: ''
        })
    }

    tagStyle(tag) {
        return {
            background: tag
        }
    }

    render() {

        return (
            <div className="taskmodal">
                <div className={`taskModal taskModal-${this.props.task.id}`}>
                    <div className="taskModalContent">

                        {/* 제목 및 닫기 버튼 */}
                        <div className="taskModal-title">
                            <input
                                className="taskModal-titleInput"
                                onChange={this.props.handleChange} type="text"
                                placeholder={this.state.inputDefaultValue}
                                // 추후 default value를 DB에서 가져오는 방식으로 수정할 것!
                                onClick={this.clearInputValue}
                                onKeyDown={() => this.props.updateTaskContent(
                                    this.props.task.id,
                                    this.props.index,
                                    this.props.column.id,
                                    this.props.newContent
                                )}
                            />
                            {/* <div className="taskModalClose" onClick={() => this.props.closeModal(`taskModal-${this.props.task.id}`)}>&times;</div> */}
                            <div className="taskModal-closeBtn">
                                <div className="taskModal-closeBtn-wrapper">
                                    &#10006;
                                </div>
                            </div>
                        </div>

                        {/* 태그 리스트 */}
                        <div className="taskModal-content">
                            <h3 className="taskModal-contentTitle">현재 컬럼: <u><i>{this.props.column.title}</i></u></h3>
                            <div className="tagList-box">
                                <h3 className="tag-list-title">태그 목록</h3>
                                <div className="tag-list-body">
                                    <div className="tag-list">
                                        { this.props.task.tag.map( (tag, index) => {
                                            return (
                                                <div className={`tag-for-${index} tag-each`} style={this.tagStyle(tag)}>
                                                    <p className="tag-content">#{this.props.tags[tag].content}</p>
                                                </div>
                                            )})
                                        }
                                    </div>
                                    <button className="tag-list-add">태그 추가</button>
                                </div>  
                                {/* <ul className="tag-list">
                                    <li className={`tag-${}`}>     
                                    </li>
                                </ul> */}
                            </div>
                            <div className="taskModal-description">
                                <h3 className="taskModal-description-title">Description</h3>
                                <textarea className="taskModal-textarea" name="" id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>

                        {/* Task 세부 내용 */}
                        <div className="taskModal-option"></div>
                    </div>
                </div>
            </div>
        )
    }
}