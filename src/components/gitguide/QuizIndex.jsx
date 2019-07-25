import React from 'react';
import './css/QuizIndex.css';

class QuizIndex extends React.Component {
    render() {
        return (
            <>
                <div className="QuizIndex">
                    Index buttons are here !!
                </div>
                <div className="QuizIndex__Current">
                    <ShowCurrentIndex />
                    <ShowTimeRemaining />
                    <div style={{clear: "both"}}></div>
                </div>
            </>
        )
    }
}

// 클릭하면 해당 번호를 가진 문제로 이동할 수 있는 버튼 컴포넌트
const IndexButton = () => {
    return (
        <button className="QuizIndex__Button">?</button>
    )
}

// 사용자가 현재 몇 번쨰 문제를 풀고있는지 알려주는 텍스트 컴포넌트
// ex) 10문제 중 1번째 문제
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

export default QuizIndex;