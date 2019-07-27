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
            
            // modal을 띄우는 순간 window전체가 (.taskModal)이므로
            // target이 modal인 경우 모달이 꺼지게 만들면 된다.
            if (event.target == modal) {
                modal.style.display = 'none'
            }
        })
    }

    tags = this.props.task.tag

    render() {
        const newContent = ''

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
                    <div className="container"
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
                        <Taskmodal
                            task={this.props.task}
                            column={this.props.column}
                            index={this.props.index}
                            updateTaskContent={this.props.updateTaskContent}
                            newContent={this.state.newContent}
                            handleChange={this.handleChange}
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