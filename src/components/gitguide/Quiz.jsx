import React, { Component } from 'react';
import Question from './Question';
import AnswerInputForm from './AnswerInputForm';

class Quiz extends Component {
    render() {
        return (
            <div className="Quiz">
                <h2>Quiz</h2>
                <div className="Quiz__Question">
                    <Question />
                </div>
                <div className="Quiz__AnswerInputForm">
                    <AnswerInputForm />
                </div>
            </div>
        );
    }
}

export default Quiz;