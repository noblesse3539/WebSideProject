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
            return '터미널에 코드를 입력해주세요!'
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