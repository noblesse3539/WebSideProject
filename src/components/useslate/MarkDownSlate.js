import React, {Component} from 'react'
import MarkdownShortcuts from './MarkDownShortcuts'


export default class MarkDownSlate extends Component {

    state = {

    }
    render() {
        return (
            <div
                style={{
                    background:'rgba(255, 255, 255, 0.7)',
                    marginLeft: '20px',
                    minWidth: '400px'
                }}
            >
                <MarkdownShortcuts></MarkdownShortcuts>
            </div>
        )
    }
}