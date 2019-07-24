import React from 'react'
import styled from 'styled-components'
import Task from './task'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import './column.css'

const Container = styled.div`
    margin: 8px;
    width: 30%;
    border-radius: 10px !important;
    min-height: 50px !important;
`
const Title = styled.div`
    padding: 10px;
    padding-left: 20px;
    font-size: 3rem;
    display: flex;
    justify-content: space-between;
    background: #dfe3ee;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    font-family: 'Shadows Into Light', cursive;
    font-weight: bold;
`
const TaskList = styled.div`
    padding: 8px;
    padding-bottom: 0;
    padding-right: 0;
    padding-left: 0;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-height: 25px;
    background-color: ${props => props.isDraggingOver ? "#ffb7c5" : "#dfe3ee"};
`

export default class Column extends React.Component {

    openModal(taskModalIndex) {
        console.log(taskModalIndex)
        const modal = document.querySelector(`.${taskModalIndex}`)
        modal.style.display = 'block'
    }

    closeModal(taskModalIndex) {
        const modal = document.querySelector(`.${taskModalIndex}`)
        modal.style.display = 'none'
    }

    handleSubmit(event) {
        event.preventDefault()
        // Add more things that you want to do later here ! 
    }

    handleChange(e) {
        this.setState({value: e.target.value})
    }

    render() {

        return (
            <Draggable draggableId={this.props.column.id} index={this.props.index}>
                {(provided, snapshot) => (
                    <Container
                        {...provided.draggableProps}
                    >
                        <Title
                            ref={provided.innerRef}
                            isDragging={snapshot.isDragging}
                            {...provided.dragHandleProps}
                        >
                            <div className="taskTitle">
                                {this.props.column.title}
                            </div>
                        </Title>

                        <Droppable droppableId={this.props.column.id}>
                            {(provided, snapshot) => (
                                <TaskList
                                    ref={provided.innerRef}
                                    isDraggingOver={snapshot.isDraggingOver}
                                    {...provided.droppableProps}
                                >
                                    {this.props.tasks.map((task, index) =>
                                        <Task 
                                            key={task.id} 
                                            task={task}
                                            index={index} 
                                            column={this.props.column}
                                            deleteTask={this.props.deleteTask} 
                                            updateTaskContent={this.props.updateTaskContent}
                                            openModal={this.openModal}
                                            closeModal={this.closeModal}
                                        >
                                        </Task>
                                    )}
                                    {/* <div className="addTask-box">
                                        <button key={this.props.column.id} className="addTask" 
                                            onClick={() => this.props.addNewTask(this.props.column.id) }>+ Add a new task !</button>
                                    </div> */}
                                    {provided.placeholder}
                                </TaskList>

                            )}
                        </Droppable>
                        <div className="addTask-box">
                            <button key={this.props.column.id} className="addTask"
                                onClick={() => this.props.addNewTask(this.props.column.id)}>+ Add a new task !</button>
                        </div>
                        
                    </Container>
                )}
            </Draggable>
        )
    }
}