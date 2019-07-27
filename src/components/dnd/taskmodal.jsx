import React from 'react'
import './taskmodal.scss'

export default class Taskmodal extends React.Component {

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
                                defaultValue={this.props.task.content}
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
                            <h3>In list <u><i>{this.props.column.title}</i></u></h3>
                            <div className="tagList-inside">
                                <h3 className="tag-list-title">Tags</h3>
                                {/* <ul className="tag-list">
                                                <li className={`tag-${}`}>
                                                    
                                                </li>
                                            </ul> */}
                            </div>
                            <h3 className="tagList">Description</h3>
                        </div>

                        {/* Task 세부 내용 */}
                        <div className="taskModal-option"></div>
                    </div>
                </div>
            </div>
        )
    }
}
