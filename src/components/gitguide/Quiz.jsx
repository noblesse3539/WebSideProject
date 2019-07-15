import React from 'react';

import Question from './Question';
import Answer from './Answer';

import './css/Quiz.css';

class Quiz extends React.Component {
    render() {
        return (
            <div className="Quiz">
                <div className="Quiz__Question">
                    <Question />
                </div>
                <div className="Quiz__Answer">
                    <Answer />
                </div>
            </div>
        )
    }
}

export default Quiz;