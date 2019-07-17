import React from 'react';

export default class AnswerInputForm extends React.Component {
    state = {
        answer: '',
        score: 0,
    }

    handleChange = (e) => {
        this.setState({
            answer: e.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.answer === this.props.solution) {
            this.state.score = 1;
        }
        if (this.state.answer !== this.props.solution) {
            this.state.score = 2;
        }
        this.setState({
            answer: '',
        })
    }

    render() {
        // 답을 제출하지 않은 경우
        if (this.state.score === 0) {
            return (
                <div className="AnswerInput">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            placeholder="정답을 입력하세요."
                            name="answer"
                            value={this.state.answer}
                            onChange={this.handleChange}
                        />
                        <button type="submit">제출</button>
                    </form>
                </div>
            );
        }
        // 제출한 답이 정답인 경우
        if (this.state.score === 1) {
            return (
                <h2>합!격!</h2>
            )
        }
        // 제출한 답이 오답인 경우
        if (this.state.score === 2) {
            return (
                <h2>오!답!</h2>
            )
        }
    }
}