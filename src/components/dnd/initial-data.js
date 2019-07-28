const initialData = {
    // tasks are the components that we want to display
    tasks: {
        'task-1' : { 
                    id: 'task-1', 
                    content: '리액트 드래그 앤 드롭 구현하기', 
                    tag: ['orange'],
                    description: 'Is tis going to be displayed?',
                    },
        'task-2' : { 
                    id: 'task-2', 
                    content: '식사하기', 
                    tag: ['red', 'orange'],
                    description: 'How about this?',
                    },
        'task-3' : { 
                    id: 'task-3', 
                    content: '즐겁게 알고리즘 문제 풀기', 
                    tag: ['green', 'orange'],
                    description: '',
                    },   
        'task-4' : { 
                    id: 'task-4', 
                    content: '커피 한 잔 더 마시기', 
                    tag: ['hotpink', 'blue'],
                    description: '',
                    },
        'task-5' : { 
                    id: 'task-5', 
                    content: 'webengers 파이팅', 
                    tag: [],
                    description: '',
                    },
    },
    columns: {
        'column-1' : {
            id: 'column-1',
            title: 'To Do',
            // taskIds has two purposes. 1) ownership 2) orders of tasks
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5']
        },
        'column-2' : {
            id: 'column-2',
            title: 'Do-ing',
            // taskIds has two purposes. 1) ownership 2) orders of tasks
            taskIds: []
        },
        'column-3' : {
            id: 'column-3',
            title: 'Done',
            // taskIds has two purposes. 1) ownership 2) orders of tasks
            taskIds: []
        },
    },
    columnOrder: ['column-1', 'column-2', 'column-3'],
    taskOrder: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5'],
    tags: {
        'orange' : {'content' : 'eating'},
        'blue'   : {'content' : 'workout'},
        'red'    : {'content' : 'studying'},
        'green'  : {'content' : 'chilling'},
        'hotpink' : {'content' : 'meditating'},
    },
}

export default initialData