import React from 'react';
import './QuizIndex.scss';

import { QuestionsConsumer } from './contexts/questions';

class QuizIndex extends React.Component {
    render() {
        const indexButtons = this.props.questions.map(function (question) {
            return (
                <button className="QuizIndex__Button">
                    {question.questionId + 1}
                </button>
            );
        })

        return (
            <>
                <div className="QuizIndex">
                    {indexButtons}
                </div>
                <div className="QuizIndex__CurrentWrapper">
                    <div className="QuizIndex__Current">
                        <ShowCurrentIndex />
                        <ShowTimeRemaining />
                        <div style={{ clear: "both" }}></div>
                    </div>
                </div>
            </>
        )
    }
}

// 클릭하면 해당 번호를 가진 문제로 이동할 수 있는 버튼 컴포넌트
const IndexButton = (number, key) => {
    return (
        <button className="QuizIndex__Button">
            {number}
        </button>
    )
}

// 사용자가 현재 몇 번쨰 문제를 풀고있는지 알려주는 텍스트 컴포넌트 (ex- 10문제 중 1번째 문제)
const ShowCurrentIndex = () => {
    return (
        <p className="QuizIndex__ShowIndex">10문제 중 1번째 문제</p>
    )
}

const ShowTimeRemaining = () => {
    return (
        <p className="QuizIndex__Time">30초 남았습니다</p>
    )
}

const QuizIndexContainer = () => {
    return (
        <QuestionsConsumer>
            {
                ({ state }) => (
                    <QuizIndex
                        questions={state.Basic}
                    />
                )
            }
        </QuestionsConsumer>
    );
};

export default QuizIndexContainer;