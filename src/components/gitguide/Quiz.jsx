import React from 'react';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';

function renderAnswerOptions(key) {
    return (
        <AnswerOption
            key={key.content}
            answerContent={key.content}
            answerType={key.type}
            answer={props.answer}
            questionId={props.questionId}
            onAnswerSelected={props.onAnswerSelected}
        />
    );
}

function Quiz(props) {
    return (
        <div className="quiz">
            <QuestionCount />
            <Question />
            <ul className="answerOptions">
                {props.answerOptions.map(renderAnswerOptions)}
            </ul>
        </div>
    );
}

Quiz.propTypes = {
    answer: React.PropTypes.string.isRequired,
    answerOptions: React.PropTypes.array.isRequired,
    counter: React.PropTypes.number.isRequired,
    question: React.PropTypes.string.isRequired,
    questionId: React.PropTypes.number.isRequired,
    questionTotal: React.PropTypes.number.isRequired,
    onAnswerSelected: React.PropTypes.func.isRequired
};

export default Quiz;