import React from 'react';
import './AnswerInputForm.scss';
import { QuestionsConsumer } from './contexts/questions';

class InputForm extends React.Component {
    state = {
        userAnswer: ''
    }

    render() {
        const handleChange = (event) => {
            // 답안을 제출하지 않은 상태여야만 입력값을 변경할 수 있음
            if (this.props.editable !== false) {
                this.setState({
                    userAnswer: event.target.value
                })
            }
            // 답안 제출 후 변경을 시도할 경우 팝업 알림창 출력
            if (this.props.editable === false) {
                alert('이미 제출한 답안은 변경할 수 없습니다 :)');
            }
        }
        // 엔터키를 눌렸을 경우, 사용자의 입력값을 Context 데이터에 넘겨준다.
        const handleClick = () => {
            this.props.setUserAnswer(this.state.userAnswer)
        }
        // 사용자가 엔터키를 눌렸는지 확인하고 handleClick 함수를 호출한다.
        const handleKeyPress = (event) => {
            if (event.charCode === 13 && this.props.editable === true) {
                console.log('엔터키를 잘 인식하는군요.')
                handleClick();
            }
        }

        return (
            <>
                <input
                    className="AnswerInputForm"
                    onChange={handleChange}
                    value={this.state.userAnswer}
                    onKeyPress={handleKeyPress}     // 키를 누를 때 handleKeyPress로 가서 엔터키인지 확인한다.
                />
            </>
        );
    }
}

const InputFormContainer = () => {
    return (
        <QuestionsConsumer>
            {
                ({ state, actions }) => (
                    <InputForm
                        editable={state.Basic[state.count].editable}
                        setUserAnswer={actions.setUserAnswer}
                    />
                )
            }
        </QuestionsConsumer>
    );
}

export default InputFormContainer;