import React from 'react';

import AnswerInputForm from './AnswerInputForm';
import AnswerSolution from './AnswerSolution';
import AnswerTerminal from './AnswerTerminal';

class Answer extends React.Component {
    render() {
        return (
            <div className="Answer">
                <AnswerInputForm
                    // onInputAnswer={this.handleUserAnswer}
                    solution="git init"
                />
            </div>
        );
    }
}

export default Answer;