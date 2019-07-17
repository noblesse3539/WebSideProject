import React from 'react';

import Question from './Question';
import Answer from './Answer';
import AnswerInputForm from './AnswerInputForm';

import './css/Quiz.css';

class Quiz extends React.Component {
    state = {
        renderType: 0
    }

    render() {
        return (
            <div className="Quiz">
                <div className="Quiz__Question">
                    <Question />
                </div>
                <div className="Quiz__Answer">
                    <Answer
                        solution="git init"
                    />
                </div>
                <div className="Quiz__Next">
                    <button type="submit">
                        다음문제
                    </button>
                </div>
            </div>
        );
    }
}

export default Quiz;