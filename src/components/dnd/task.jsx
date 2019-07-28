import React from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'
import NaturalDragAnimation from 'natural-drag-animation-rbdnd'
import Taskmodal from './taskmodal'
import './task.css'

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 5px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    background-color: ${props => (props.isDragging ? 'white' : 'white')};
`

const taskContentHover = '::-webkit-input-placeholder {color: red;}';

export default class Task extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            newContent: '',
        }
        this.handleChange = this.handleChange.bind(this)
      }

    handleChange(e) {
        this.setState({newContent: e.target.value})
    }

    componentDidMount() { 
        window.addEventListener('click', (event) => {
            
            const modal = document.querySelector(`.taskModal-${this.props.task.id}`)
            const modalCloseBtn = document.querySelector(".taskModal-closeBtn")
            if (event.target.classList[0] == `taskModal-closeBtn-wrapper-${this.props.task.id}`) {
                // modal을 띄우는 순간 window전체가 (.taskModal)이므로
                // target이 modal인 경우 모달이 꺼지게 만들면 된다.
                // console.log(event.target)
                // console.log(event.target.classList[0].slice(-6))
                if (this.props.task.id == event.target.classList[0].slice(-6) ) {
                    modal.style.display = 'none'

                    // isDragDisabled 관련해서 반드시 호출해줘야하는 메소드입니다!
                    this.props.setIsModal()
                }
            } 

            if (event.target == modal) {
                // console.log(event.target)
                // console.log(this.props.task.id)
                modal.style.display = 'none'
                this.props.setIsModal()
            }
        })
    }

    componentWillUnmount() {
        window.addEventListener('click', (event) => {
            const modal = document.querySelector(`.taskModal-${this.props.task.id}`)
            const modalCloseBtn = document.querySelector(".taskModal-closeBtn")
            // modal을 띄우는 순간 window전체가 (.taskModal)이므로
            // target이 modal인 경우 모달이 꺼지게 만들면 된다.
            if (event.target == modal || event.target.classList[0] == `taskModal-closeBtn-wrapper-${this.props.task.id}`) {
                modal.style.display = 'none'
                this.props.setIsModal()
            }
        })
    }

    tags = this.props.task.tag

    render() {
        const newContent = ''
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
            <Draggable 
                draggableId={this.props.task.id} 
                index={this.props.index}
                isDragDisabled={this.props.isDragDisabled}
            >
                {(provided, snapshot) => (
                    <NaturalDragAnimation
                    style={provided.draggableProps.style}
                    snapshot={snapshot}
                    nimationRotationFade="0.5"
                    rotationMultiplier="1.2"
                    >
                    {style => (
                    <div className="container task-container"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={style}
                        isDragging={snapshot.isDragging}
                        onClick={ () => this.props.openModal(`taskModal-${this.props.task.id}`)}
                      >
                        <div className="tags">
                            <ul className="tagList">    
                                {
                                    this.tags.map( tag => {
                                        return <li className={tag}></li>
                                    })
                                }
                            </ul>
                        </div>
                        <div className="task-content">
                            {this.props.task.content}
                            {/* <button className="deleteTask" onClick={() =>
                                this.props.deleteTask(this.props.task.id, this.props.index, this.props.column.id)}
                                >
                                &#10006;
                            </button> */}
                        </div>
                        <div className="task-content-alarms">
                            <div>
                                { this.props.task.description ? <i class="far fa-file-alt"></i> : ''}
                            </div>
                            <div>
                                <div className="taskModal-members-list">
                                            {
                                                taskMembers.map( (member, index) => {
                                                    return (
                                                        <div 
                                                            key={index}
                                                            className={`taskModal-member-${member.name} taskModal-member-image-box taskModal-member-image-showindow`}
                                                        >
                                                            <img 
                                                                className="taskModal-member-image " 
                                                                src={member.profileImage} 
                                                                alt="Each member's beautiful face"
                                                            />
                                                        </div>
                                                    )
                                                })
                                            }
                                </div>
                            </div>
                        </div>
                        <Taskmodal

                            task={this.props.task}
                            column={this.props.column}
                            index={this.props.index}
                            tags={this.props.tags}
                            members={this.props.members}
                            updateTaskContent={this.props.updateTaskContent}
                            updateTaskDescription={this.props.updateTaskDescription}
                            newContent={this.state.newContent}
                            handleChange={this.handleChange}
                            closeModal={this.props.closeModal}
                            ref={this.props.ref}
                        >
                        </Taskmodal>
                      </div>
                    )}
                  </NaturalDragAnimation>
                )}
            </Draggable>
        )
    }
}