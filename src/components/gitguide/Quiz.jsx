import React, { Component } from 'react';
import './Quiz.scss'

import Question from './Question';
import AnswerInputform from './AnswerInputForm';

class Quiz extends Component {
    render() {
        return (
            <>
                <div className="Quiz">
                    <div className="Quiz__QuestionWrapper">
                        <Question />
                    </div>
                    <div className="Quiz__InputWrapper">
                        <TerminalPath />
                        <AnswerInputform />
                    </div>
                </div>
            </>
        );
    }
}

const TerminalPath = () => {
    return (
        <>
            <p className="TerminalPath">
                ~/GitGuide/BasicCourse
            </p>
            <p style={{ color: "yellow", display: "inline" }}>
                $
            </p>
        </>
    )
}

export default Quiz;