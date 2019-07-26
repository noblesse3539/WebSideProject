import React, { Component } from 'react';
import { QuestionsConsumer } from './contexts/questions';

const QuestionDetail = (props) => {
    return (
        <QuestionsConsumer>
            {
                ({ state }) => (
                    <div>
                        <h4>{state.Basic[props.questionId].topic}</h4>
                        <p>{state.Basic[props.questionId].question}</p>
                    </div>
                )
            }
        </QuestionsConsumer>
    );
}

export default QuestionDetail;