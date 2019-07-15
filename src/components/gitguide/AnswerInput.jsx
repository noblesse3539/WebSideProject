import React from 'react';

class AnswerInput extends React.Component {
    state = {
        answer: '',
    }
    
    render() {
        return (
            <div className="AnswerInput">
                <input 
                    placeholder="정답을 입력하세요."
                    name="answer"
                />
            </div>
        );
    }
}

export default AnswerInput;