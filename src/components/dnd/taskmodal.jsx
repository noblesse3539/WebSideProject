import React from 'react'
import './taskmodal.scss'

export default class Taskmodal extends React.Component {

    constructor(props) {
        super(props)
        this.clearInputValue        = this.clearInputValue.bind(this)
        this.handleChange           = this.handleChange.bind(this)
        this.openAddingMemberModal  = this.openAddingMemberModal.bind(this)
        this.openAddingTagModal     = this.openAddingTagModal.bind(this)
        this.state = {
            inputDefaultValue: this.props.task.content,
            descriptionInputValue: this.props.task.description,
            isAddingMemberModalOpen : false,
            isAddingTagModalOpen: false,
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

    handleChange(event) {
        this.setState({
            ...this.state,
            descriptionInputValue: event.target.value,
        })
    }

    openAddingMemberModal() {

        if (this.state.isAddingMemberModalOpen == false) {
            this.setState({
                ...this.state,
                isAddingMemberModalOpen : true
            })
        } else {
            this.setState({
                ...this.state,
                isAddingMemberModalOpen : false
            })
        }
    }

    openAddingTagModal() {

        if (this.state.isAddingTagModalOpen == false) {
            this.setState({
                ...this.state,
                isAddingTagModalOpen : true
            })
        } else {
            this.setState({
                ...this.state,
                isAddingTagModalOpen : false
            })
        }
    }

    render() {

        const taskMembers = []
        
        if (this.props.task.members) {
            this.props.task.members.map( (taskMember, index) => {
                this.props.members.filter( (member, index) => {
                    if (member.id == taskMember) {
                        taskMembers.push(member)
                    }
                })
            })
        }

        return (
            <div className="taskmodal">
                <div className={`taskModal taskModal-${this.props.task.id}`}>
                    <div className="taskModalContent">

                        {/* 제목 및 닫기 버튼 */}
                        <div className="taskModal-title">
                            <input
                                className={`taskModal-titleInput taskModal-titleInput-${this.props.task.id}`}
                                onChange={this.props.handleChange} type="text"
                                placeholder={this.state.inputDefaultValue}
                                // 추후 default value를 DB에서 가져오는 방식으로 수정할 것!
                                onClick={this.clearInputValue}
                                onKeyDown={(event) => this.props.updateTaskContent(
                                    this.props.task.id,
                                    this.props.index,
                                    this.props.column.id,
                                    this.props.newContent,
                                    `taskModal-titleInput-${this.props.task.id}`,
                                    event,
                                )}
                            />
                            {/* <div className="taskModalClose" onClick={() => this.props.closeModal(`taskModal-${this.props.task.id}`)}>&times;</div> */}
                            <div 
                                className="taskModal-closeBtn"
                                onClick={ () => this.props.closeModal(`taskModal-${this.props.task.id}`)}
                            >
                                <div className={`taskModal-closeBtn-wrapper-${this.props.task.id} taskModal-closeBtn-wrapper`}>
                                    &#10006;
                                </div>
                            </div>
                        </div>

                        {/* 모달 컨텐츠 */}
                        <div className="taskModal-content">
                            <div className="taskModal-content-left">
                                <h3 className="taskModal-contentTitle">현재 컬럼: <u><i>{this.props.column.title}</i></u></h3>
                                <div className="taskModal-members">
                                    <h3><i class="fas fa-user"></i> 멤버 목록</h3>
                                    <div className="taskModal-members-list">
                                        {
                                            taskMembers.map( (member, index) => {
                                                return (
                                                    <div 
                                                        key={index}
                                                        className={`taskModal-member-${member.name} taskModal-member-image-box`}
                                                    >
                                                        <img 
                                                            className="taskModal-member-image" 
                                                            src={member.profileImage} 
                                                            alt="Each member's beautiful face"
                                                        />
                                                        <span class="taskModal-member-name">{member.name}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="tagList-box">   
                                    <h3 className="tag-list-title"><i class="fas fa-tag"></i> 태그 목록</h3>
                                    <div className="tag-list-body">
                                        <div className="tag-list">
                                            {this.props.task.tag.map((tag, index) => {
                                                return (
                                                    <div className={`tag-for-${index} tag-each`} style={this.tagStyle(tag)} key={index}>
                                                        <p className="tag-content">#{this.props.tags[tag].content}</p>
                                                    </div>
                                                )
                                            })
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="taskModal-description">
                                    <h3 className="taskModal-description-title">
                                        <i class="far fa-file-alt"></i> 상세 설명
                                </h3>
                                    <textarea
                                        className={`taskModal-textarea taskModal-textarea-${this.props.task.id}`}
                                        name=""
                                        id=""
                                        cols="30"
                                        rows="10"
                                        value={this.state.descriptionInputValue}
                                        // defaultValue={this.state.descriptionInputValue}
                                        onChange={this.handleChange}
                                        onKeyDown={(event) => this.props.updateTaskDescription(
                                            this.props.task.id,
                                            this.props.column.id,
                                            this.state.descriptionInputValue,
                                            `taskModal-textarea-${this.props.task.id}`,
                                            event,
                                        )}
                                    >
                                    </textarea>
                                </div>
                            </div>
                            <div className="taskModal-content-right">

                                {/* 멤버 추가 */}
                                <div className="taskModal-content-add-member">
                                    <button 
                                        className="taskModal-content-btn"
                                        onClick={() => this.openAddingMemberModal()}
                                    >
                                        <i class="fas fa-user"></i> 멤버 추가
                                    </button>
                                </div>

                                {/* 멤버 추가 모달 버튼을 이런식으로 inline 조건문을 사용하면 편하게 띄울 수 있어요! */}
                                {
                                    this.state.isAddingMemberModalOpen == true &&
                                    <div className="taskModal-content-add-member-modal">
                                        <h3 className="taskModal-content-add-member-title">멤버 추가하기</h3>
                                        <div className="taskModal-content-add-member-box">
                                            {
                                                this.props.members.map( (member, index) => {

                                                    let taskMemberStatus
                                                    let taskMemberStatusStyle

                                                    if (this.props.task.members) {
                                                        const targetIndex = this.props.task.members.indexOf(member.id)
                                                     
                                                        if (targetIndex == -1) {
                                                            taskMemberStatus = <i class="far fa-plus-square"></i>
                                                            taskMemberStatusStyle = {
                                                                
                                                            }
                                                        } else {
                                                            taskMemberStatus = <i class="far fa-check-square"></i>
                                                            taskMemberStatusStyle = {
                                                                color: 'green',
                                                                fontWeight: '700'
                                                            }
                                                        }

                                                    } else {
                                                        taskMemberStatus = <i class="far fa-plus-square"></i>
                                                        taskMemberStatusStyle = {}
                                                    }

                                                    // 현재 task member에 없는 member는 인덱스가 -1로 출력됩니다.
                                                    return (
                                                        <div 
                                                            key={index}
                                                            className={`taskModal-member-add-box-${index} taskModal-member-add-box`}
                                                            onClick={() => this.props.updateTaskMembers(
                                                                                                    this.props.task.id,
                                                                                                    this.props.column.id,
                                                                                                    member.id,
                                                            )}
                                                            style={taskMemberStatusStyle}
                                                        >
                                                            <div
                                                                key={index}
                                                                className={`taskModal-member-${member.name} taskModal-member-image-box taskModal-content-add-member-image-box`}
                                                            >
                                                                <img 
                                                                    className="taskModal-member-image taskModal-content-add-member-image" 
                                                                    src={member.profileImage} 
                                                                    alt="Each member's beautiful face"
                                                                />
                                                            </div>
                                                            <p className="taskModal-content-add-member-name">
                                                                {member.name}
                                                            </p>
                                                            <div className="taskModal-content-add-btn" style={taskMemberStatusStyle}>
                                                                {taskMemberStatus}
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                }

                                {/* 태그 추가 */}
                                <div className="taskModal-content-add-tag">
                                    <button 
                                        className="tag-list-add taskModal-content-btn"
                                        onClick={() => this.openAddingTagModal()}
                                    >
                                        <i class="fas fa-tag"></i> 태그 추가
                                    </button>
                                </div>
                                {
                                    this.state.isAddingTagModalOpen == true &&
                                    <div className="taskModal-content-add-member-modal">
                                        <h3 className="taskModal-content-add-member-title">태그 추가하기</h3>
                                        <div className="taskModal-content-add-member-box">
                                            {/* {
                                                this.props.tags.map( (member, index) => {
                                                    
                                                })
                                            } */}
                                        </div>
                                    </div>
                                }


                                {/* 날짜 추가 */}
                                <div className="taskModal-content-add-duedate">
                                    <button className="taskModal-content-btn">
                                        <i class="fas fa-clock"></i> 날짜 추가
                                    </button>
                                </div>

                                {/* 보관하기 */}
                                <div className="taskModal-content-add-delete">
                                    <button className="taskModal-content-btn taskModal-content-store">
                                        <i class="fas fa-box-open"></i> 보관하기
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Task 세부 내용 */}
                        <div className="taskModal-option">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
