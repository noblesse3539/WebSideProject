import React from 'react';

import AnswerInput from './AnswerInput';
import AnswerSolution from './AnswerSolution';
import AnswerTerminal from './AnswerTerminal';

class Answer extends React.Component {
    render() {
        return (
            <div className="Answer">
                <AnswerInput />
                <AnswerSolution solution="git init" />
                <AnswerTerminal terminal="$ blahblah" />
            </div>
        );
    }
}

export default Answer;