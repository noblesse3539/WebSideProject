const initialData = {
    // tasks are the components that we want to display
    tasks: {
        'task-1' : { 
                    id: 'task-1', 
                    content: '리액트 드래그 앤 드롭 구현하기', 
                    tag: ['orange'],
                    description: 'Is tis going to be displayed?',
                    members: ['member-1', 'member-4'],
                    },
        'task-2' : { 
                    id: 'task-2', 
                    content: '식사하기', 
                    tag: ['red', 'orange'],
                    description: 'How about this?',
                    members: ['member-1', 'member-2'],
                    },
        'task-3' : { 
                    id: 'task-3', 
                    content: '즐겁게 알고리즘 문제 풀기', 
                    tag: ['green', 'orange'],
                    description: '',
                    members: ['member-1', 'member-2'],
                    },   
        'task-4' : { 
                    id: 'task-4', 
                    content: '커피 한 잔 더 마시기', 
                    tag: ['hotpink', 'blue'],
                    description: '',
                    members: ['member-1', 'member-3'],
                    },
        'task-5' : { 
                    id: 'task-5', 
                    content: 'webengers 파이팅', 
                    tag: [],
                    description: '',
                    members: ['member-1', 'member-3', 'member-4'],
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
    members: [
                {
                    id: 'member-1',
                    name: 'mozzicheek',
                    profileImage: 'https://i.pinimg.com/originals/af/a5/11/afa511ec967308b2d28f26e622854613.jpg',
                    tasks: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5'],
                },
                {
                    id: 'member-2',
                    name: 'chowchow',
                    profileImage: 'http://www.dewebsite.org/logo/michelin/michelin_logo.gif',
                    tasks: ['task-2', 'task-3'],
                },
                {
                    id: 'member-3',
                    name: 'opalcat',
                    profileImage: 'https://seeklogo.com/images/U/ukraine-flag-logo-AB2B1D5F2E-seeklogo.com.png',
                    tasks: ['task-4', 'task-5'],
                },
                {
                    id: 'member-4',
                    name: 'yooco',
                    profileImage: 'http://cdn.shopify.com/s/files/1/0720/2413/products/7168869_grande.jpeg?v=1423545296',
                    tasks: ['task-1', 'task5'],
                },
            ],
}

export default initialData