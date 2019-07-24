import React, { Component, createContext } from 'react';
import update from 'immutability-helper';
import { thisExpression } from '@babel/types';

const Context = createContext();
const { Provider, Consumer: QuestionsConsumer } = Context;

class QuestionsProvider extends Component {
    state = {
        count: 0,           // 사용자가 보고있는 문제의 인덱스값
        userAnswer: '',     // 사용자가 제출한 답
        basic: [
            {
                questionId: 0,
                topic: "새로운 저장소 만들기",
                question: "프로젝트 폴더를 생성하여 Git으로 관리하려고 합니다. 새로 생성한 폴더를 Git 저장소로 초기화하는 명령어를 입력하세요.",
                answer: "git init",
                hint: "git ____",
                terminalResult: "",
                score: 0,
            },
            {
                questionId: 1,
                topic: "다른 저장소 받아오기",
                question: "친구 창오와 함께 프로젝트를 진행하려고 합니다. 창오의 스켈레톤 코드가 담긴 원격 저장소를 받아오려고 합니다. 다음과 같은 주소를 가진 저장소를 나의 컴퓨터 환경에 받아오기 위한 명령어를 입력하세요.",
                answer: "git clone https://github.com/yooco0618/GitGuide.git",
                hint: "___ _____ https://github.com/yooco0618/GitGuide.git",
                terminalResult: "",
                score: 0,
            },
        ]
    }

    actions = {
        // 이전문제로 돌아가기
        prevQuestion: () => {
            this.setState(
                ({ count }) => ({ count: count - 1 })
            )
            this.setState({
                userAnswer: ''
            })
        },
        // 다음문제로 넘어가기
        nextQuestion: () => {
            this.setState(
                ({ count }) => ({ count: count + 1 })
            )
            this.setState({
                userAnswer: ''
            })
            console.log(this.state.basic);
        },
        setUserAnswer: (userAnswer) => {
            const answer = this.state.basic[this.state.count].answer

            // 사용자가 제출한 답안이 정답일 경우
            if (userAnswer === answer) {
                this.setState({
                    basic: this.state.basic.map(
                        question => question.questionId === this.state.count
                        ? { ...question, score: 1}
                        : question
                    )
                })
            }

            if (userAnswer !== answer) {
                console.log(userAnswer);
                console.log(answer);
            }

            // 사용자가 제출한 정답 데이터 저장하기
            this.setState({
                userAnswer: answer
            });

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