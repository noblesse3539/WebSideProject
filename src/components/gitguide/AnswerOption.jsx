import React from 'react';

function AnswerOption(props) {
    return (
        <li className="answerOption">
            <input
                type="radio"
                className="radioGroup"
                name="radioGroup"
                checked={props.answerType === props.answer}
                id={props.answerType}
                disabled={props.answer}
                onChange={props.onAnswerSelected}
            />
            <label
                className="radioCustomLabel"
                htmlFor={props.answerType}
            >
            </label>
        </li>
    );
}

AnswerOption.propTyps = {
    answerType: PropTypes.string.isRequired,
    answerContent: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    onAnswerSelected: PropTypes.func.isRequired,
}

export default AnswerOption;