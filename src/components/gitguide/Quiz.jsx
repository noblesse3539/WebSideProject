import React, { Component } from 'react';
import './Quiz.scss'

import { QuestionsConsumer } from './contexts/questions';
import Question from './Question';
import AnswerInputform from './AnswerInputForm';
import TrueOrFalse from './TrueOrFalse';

class Quiz extends Component {
    state = {
        show: false
    }

    render() {
        const submitted = () => {
            return (
                <TrueOrFalse
                    score={this.props.score}
                    trueMessage={this.props.message}
                    answer={this.props.answer}
                />
            );
        }

        const notSubmitted = () => {
            return (
                <p className="PleaseSubmit">
                    <i>위 터미널에 명령어를 입력하면<br/> 이곳에 정답 유무가 출력됩니다.</i>
                </p>
            )
        }

        return (
            <QuestionsConsumer>
                {
                    ({ state }) => (
                        <div className="Quiz">
                            <div className="Quiz__QuestionWrapper">
                                <Question />
                            </div>
                            <div className="Quiz__InputWrapper">
                                <TerminalPath />
                                <AnswerInputform />
                                {state.Basic[state.count].score === 0 ? notSubmitted() : submitted()}
                            </div>
                        </div>
                    )
                }
            </QuestionsConsumer>
        );
    }
}

const TerminalPath = () => {
    return (
        <>
            <p className="TerminalPath">
                ~/GitGuide/BasicCourse
            </p>
            <p style={{ color: "white", display: "inline" }}>
                $
            </p>
        </>
    )
}

const QuizContainer = () => {
    return (
        <QuestionsConsumer>
            {
                ({state}) => (
                    <Quiz
                        score={state.Basic[state.count].score}
                        message={state.Basic[state.count].terminalResult}
                        answer={state.Basic[state.count].answer}
                    />
                )
            }
        </QuestionsConsumer>
    )
}

export default QuizContainer;