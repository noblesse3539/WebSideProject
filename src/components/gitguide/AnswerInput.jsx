import React from 'react';

class AnswerInput extends React.Component {
    state = {
        answer: '',
    }

    handleChange = (e) => {
        this.setState({
            answer: e.target.value
        })
    }

    render() {
        return (
            <div className="AnswerInput">
                <input
                    placeholder="정답을 입력하세요."
                    name="answer"
                    onChange={this.handleChange}
                />
                <p>당신이 입력한 값: {this.state.answer}</p>
            </div>
        );
    }
}

export default AnswerInput;