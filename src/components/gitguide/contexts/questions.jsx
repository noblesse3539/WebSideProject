import React, { Component, createContext } from 'react';

const Context = createContext();
const { Provider, Consumer:QuestionsConsumer } = Context;

class QuestionsProvider extends Component {
    state = {
        count: 0,
        basic: [
            {
                questionId: 1,
                topic: "새로운 저장소 만들기",
                question: "프로젝트 폴더를 생성하여 Git으로 관리하려고 합니다. 새로 생성한 폴더를 Git 저장소로 초기화하는 명령어를 입력하세요.",
                answer: "git init",
                hint: "git ____",
                terminalResult: ""
            },
            {
                questionId: 2,
                topic: "다른 저장소 받아오기",
                question: "친구 창오와 함께 프로젝트를 진행하려고 합니다. 창오의 스켈레톤 코드가 담긴 원격 저장소를 받아오려고 합니다. 다음과 같은 주소를 가진 저장소를 나의 컴퓨터 환경에 받아오기 위한 명령어를 입력하세요.",
                answer: "git clone https://github.com/yooco0618/GitGuide.git",
                hint: "___ _____ https://github.com/yooco0618/GitGuide.git",
                terminalResult: ""
            },
        ]
    }

    actions = {
        prevQuestion: () => {
            this.setState(
                ({ count }) => ({ count: count - 1})
            )
        },
        nextQuestion: () => {
            this.setState(
                ({ count }) => ({ count: count + 1})
            )
        }
    }

    render() {
        const { state, actions } = this;
        const value = { state, actions }
        return (
            <Provider value={value}>
                {this.props.children}
            </Provider>
        )
    }
}

export {
    QuestionsProvider,
    QuestionsConsumer,
};