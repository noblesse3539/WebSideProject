import React, { useState } from 'react';

function AnswerInputForm() {
    // answer: 상태 유지 값
    // setAnswer: answer를 갱신하는 함수
    const [answer, setAnswer] = useState('');

    const onChange = (e) => {
        setAnswer(e.target.value);
    }

    return (
        <div>
            <form>
                <input onChange={onChange} value={answer} />
            </form>
            <p>prev: {answer}</p>
            <p>next: {setAnswer}</p>
        </div>
    )
}

export default AnswerInputForm;