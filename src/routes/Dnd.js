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


    updateTaskContent = (taskId, taskIndex, columnId, newContent, e, key) => {
        
        const toUnFocus = document.querySelector(`#${taskId}`)

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
            // toUnFocus.blur()
        })

        return
    }

    // By MozziCheek
    deleteTask = (taskId, taskIndex, columnId) => {

        console.log(taskId, taskIndex, columnId)
        
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
    addNewTask = (columnId) => {
        
        // const lastTaskId = this.state.taskOrder.length
        this.counter += 1
        const lastTaskId = this.counter
        
        const newTaskId  = 'task-' + parseInt(lastTaskId+1)
        console.log(newTaskId)
        
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
                    [newTaskId] : { id: newTaskId, content: '추가되는가?', tag: []},
                },
                columns: {
                    ...this.state.columns,
                    [columnId]: newColumn,
                taskOrder: newTaskOrder
        }}
        
        this.setState(newState)
        return
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
                        const column = this.state.columns[columnId]
                        const tasks  = column.taskIds.map(taskId => this.state.tasks[taskId])

                        return <Column key={column.id} column={column} tasks={tasks} 
                                index={index} addNewTask={this.addNewTask} deleteTask={this.deleteTask}
                                updateTaskContent={this.updateTaskContent}
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