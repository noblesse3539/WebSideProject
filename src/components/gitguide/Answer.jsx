import React from 'react';

import AnswerInputForm from './AnswerInputForm';
import AnswerSolution from './AnswerSolution';
import AnswerTerminal from './AnswerTerminal';

class Answer extends React.Component {
    state = {
        userAnswer: '',
    }

    handleUserAnswer = (userAnswer) => {
        this.state.userAnswer = userAnswer;
        
    }

    render() {
        return (
            <div className="Answer">
                <AnswerInputForm
                    onInputAnswer={this.handleUserAnswer}
                />
            </div>
        );
    }
}

export default Answer;