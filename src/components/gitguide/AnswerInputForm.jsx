import React, { Component } from 'react';
import { QuestionsConsumer } from './contexts/questions';
import Answer from './Answer';

class AnswerInputForm extends Component {
    state = {
        answer: ''
    }

    // state 초기값 설정
    componentDidMount() {
        this.setState({
            answer: this.props.value
        })
    }

    render() {
        // input 입력값 감지하여 state에 반영
        const handleChange = (event) => {
            this.setState({
                answer: event.target.value
            })
        }

        // 사용자가 입력값을 제출하면 Context의 메소드를 호출하여
        // 사용자 입력값을 Context로 넘겨준다.
        const handleSubmit = (event) => {
            event.preventDefault();
            this.props.setUserAnswer(this.state.answer);
            this.setState({
                answer: ''
            })
        }
        return (
            <>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={this.state.answer} />
                    <button type="submit">제출</button>
                </form>
                <p>State 데이터 확인: {this.state.answer}</p>
            </>
        )
    }
}

const AnswerInputFormContainer = () => (
    <QuestionsConsumer>
        {
            ({ state, actions }) => (
                <>
                    <AnswerInputForm
                        value={state.userAnswer}
                        setUserAnswer={actions.setUserAnswer}
                    />
                    <p>Context 데이터 확인: {state.userAnswer}</p>
                </>
            )
        }
    </QuestionsConsumer>
)

export default AnswerInputFormContainer;

