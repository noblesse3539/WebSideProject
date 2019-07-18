import React, { Component } from 'react';
import Question from './Question';

class Quiz extends Component {
    render() {
        return (
            <div className="Quiz">
                <h2>Quiz</h2><br />
                <Question />
            </div>
        );
    }
}

export default Quiz;