import React from 'react';
import ReactDOM from 'react-dom';
import initialData from '../components/dnd/initial-data'
import Column from '../components/dnd/column'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;

`

class Dnd extends React.Component {

    state = initialData
    counter = 5 // addNewTask 메서드용 임시 변수 (현재 전체 task의 개수)

    // 현재 task에 해당 멤버가 존재하면 삭제, 그렇지 않을 경우 추가!
    updateTaskMembers = (taskId, columnId, newMember, event) => {
        
        let isThisNewTask = false
        let targetIndex

        if (this.state.tasks[taskId].members) {
            isThisNewTask = false
            targetIndex = this.state.tasks[taskId].members.indexOf(newMember)
        } else {
            isThisNewTask = true
        }
        
        const findMember  = function(member) {
            return member == newMember
        }

        let newTasks

        // 삭제하기
        if (isThisNewTask == false && this.state.tasks[taskId].members.find(findMember)) {
            
            const newMembersArr = this.state.tasks[taskId].members
            if (targetIndex != -1) {
                newMembersArr.splice(targetIndex, 1)
            } else {
                newMembersArr.splice(0, 1)
            }

            newTasks = {
                ...this.state.tasks,
                [taskId] : {
                    ...this.state.tasks[taskId],
                    members: newMembersArr
                }
            }

        // 추가하기
        } else {
            newTasks = {
                ...this.state.tasks,
                [taskId] : {
                    ...this.state.tasks[taskId],
                    members: this.state.tasks[taskId].members ? [...this.state.tasks[taskId].members, newMember] : [newMember]
                }
            }
            
        }
        
        const newState = {
            ...this.state,
            tasks: newTasks
        }
        
        this.setState(newState)
    }

    updateTaskDescription = (taskId, columnId, newDescription, target, event) => {
        
        const toUnFocus = document.querySelector(`.${target}`)
        if (event.key == 'Enter') {
            toUnFocus.blur()
        }

        const newTaskContent = {
            ...this.state.tasks,
            [taskId] : {
                ...this.state.tasks[taskId],
                description: newDescription
            }
        }

        const newState = {
            ...this.state,
            tasks : newTaskContent
        }

        this.setState(newState)

    }

    updateTaskContent = (taskId, taskIndex, columnId, newContent, target, event) => {
        
        const toUnFocus = document.querySelector(`.${target}`)
        if (event.key == 'Enter') {
            toUnFocus.blur()
        }

        const newTaskContent = {
            ...this.state.tasks,
            [taskId] : {
                ...this.state.tasks[taskId],
                content: newContent
            }
        }

        const newState = {
            ...this.state,
            tasks: newTaskContent
        }

        this.setState(newState, () => {
            }
        )

        return
    }

    // By MozziCheek
    deleteTask = (taskId, taskIndex, columnId) => {
        
        const newTaskIds = Array.from(this.state.columns[columnId].taskIds)
        newTaskIds.splice(taskIndex, 1)

        const newColumn = {
            ...this.state.columns[columnId],
            taskIds: newTaskIds
        }

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [columnId]: newColumn
            }
        }

        this.setState(newState)
        return
    }

    // By MozziCheek
    addNewTask = (columnId, openModal) => {
        
        // const lastTaskId = this.state.taskOrder.length
        this.counter += 1
        const lastTaskId = this.counter
        
        const newTaskId  = 'task-' + parseInt(lastTaskId+1)
        
        const newTasks = Array.from(this.state.columns[columnId].taskIds)
        newTasks.splice(-1, 0, newTaskId)

        const newTaskOrder = Array.from(this.state.taskOrder)
        newTaskOrder.splice(-1, 0, newTaskId)

        const newColumn = {
            ...this.state.columns[columnId],
            taskIds: newTasks
        }
        
        const newState = {
            ...this.state,
                tasks : {
                    ...this.state.tasks,
                    [newTaskId] : { id: newTaskId, content: '제목을 입력해주세요!', tag: [], description: '',},
                },
                columns: {
                    ...this.state.columns,
                    [columnId]: newColumn,
                taskOrder: newTaskOrder
        }}
        
        this.setState(newState, () => {
            return openModal(`taskModal-${newTaskId}`)
        })
    }

    onDragEnd = result => {

        const { destination, source, draggableId } = result

        if ( result.type === 'column') {
            const newColumnOrder = Array.from(this.state.columnOrder)
            newColumnOrder.splice(source.index, 1)
            newColumnOrder.splice(destination.index, 0, draggableId)

            const newState = {
                ...this.state,
                columnOrder: newColumnOrder,
            }
            this.setState(newState)
            return
        }

    
        if (!destination) {
            return
        }
    
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return
        }

        // 기존
        // const column = this.state.columns[source.droppableId]
        // 변경
        const start = this.state.columns[source.droppableId]
        const finish = this.state.columns[destination.droppableId]

        if (start == finish) {
            const newTaskIds = Array.from(start.taskIds)
            newTaskIds.splice(source.index, 1) // remoivng
            newTaskIds.splice(destination.index, 0, draggableId) // adding

            const newColumn = {
                ...start,
                taskIds: newTaskIds,
            }

            const newState = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [newColumn.id]: newColumn,
                }
            }

            this.setState(newState)
            return
        }

        const startTaskIds = Array.from(start.taskIds)
        startTaskIds.splice(source.index, 1)
        const newStart = {
            ...start,
            taskIds: startTaskIds
        }

        const finishTaskIds = Array.from(finish.taskIds)
        finishTaskIds.splice(source.index, 0, draggableId)
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds
        }

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            },
        }

        this.setState(newState)
        return
    } 

    render() {
        return (
            <DragDropContext
                onDragEnd={this.onDragEnd}
            >
            <Droppable droppableId="all-columns" direction="horizontal" type="column">
                { (provided) => (
                    <Container
                        {...provided.droppableProps}
                        ref = {provided.innerRef}
                    >
                        {this.state.columnOrder.map((columnId, index) => {
                        const column  = this.state.columns[columnId]
                        const tasks   = column.taskIds.map(taskId => this.state.tasks[taskId])
                        const tags    = this.state.tags
                        const members = this.state.members

                        return <Column 
                                    key={column.id} 
                                    column={column} 
                                    tasks={tasks} 
                                    tags={tags}
                                    members={members}
                                    index={index} 
                                    addNewTask={this.addNewTask} 
                                    deleteTask={this.deleteTask}
                                    updateTaskContent={this.updateTaskContent}
                                    updateTaskDescription={this.updateTaskDescription}
                                    updateTaskMembers={this.updateTaskMembers}
                                />
                        })}
                        {provided.placeholder}
                    </Container>
                )}
            </Droppable>
        </DragDropContext>
        )
    }
}

export default Dnd