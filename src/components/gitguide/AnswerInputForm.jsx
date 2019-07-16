import React from 'react';

export default class AnswerInputForm extends React.Component {
    state = {
        answer: '',
    }

    // Input 태그의 내용이 수정될 때마다 실행되는 함수
    // 입력되는 값을 state 값에 실시간으로 동기화시킨다.
    handleChange = (e) => {
        this.setState({
            answer: e.target.value
        })
    }

    // 이용자가 Form 태그를 통해 정답을 제출했을 때 실행되는 함수
    // 페이지 리로딩을 중지시키고, 사용자가 입력한 state값을 부모 컴포넌트에게 전달한다.
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onInputAnswer(this.state.answer);
        this.setState({
            answer: '',
        })
    }

    render() {
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
}