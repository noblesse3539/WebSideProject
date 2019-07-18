import React, { useState } from 'react';

function AnswerInputForm() {
    // answer: 상태 유지 값
    // setAnswer: answer를 갱신하는 함수
    const [answer, setAnswer] = useState('');

    const onChange = (e) => {
        setAnswer(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={onChange} value={answer} />
                <button type="submit">제출</button>
            </form>
        </div>
    )
}

export default AnswerInputForm;