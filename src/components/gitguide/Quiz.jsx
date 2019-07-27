import React, { Component } from 'react';
import './Quiz.scss'

import { QuestionsConsumer } from './contexts/questions';
import Question from './Question';
import AnswerInputform from './AnswerInputForm';
import TrueOrFalse from './TrueOrFalse';

class Quiz extends Component {
    render() {
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
                                <TrueOrFalse
                                    score={state.Basic[state.count].score}
                                />
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

export default Quiz;