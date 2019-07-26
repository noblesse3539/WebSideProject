import React, { Component } from 'react';
import { QuestionsConsumer } from './contexts/questions';
import './Question.scss';

class Question extends Component {
    render() {
        return (
            <QuestionsConsumer>
                {
                    ({ state }) => (
                        <>
                            <div className="Question__TopicName">
                                <Topic name={state.Basic[state.count].topic} />

                            </div>
                            <div className="Question__Content">
                                <QuestionContent content={state.Basic[state.count].question} />
                            </div>
                        </>
                    )
                }
            </QuestionsConsumer>
        )
    }
}

const Topic = ({ name }) => {
    return (
        <>
            <p>{name}</p>
        </>
    )
}

const QuestionContent = ({ content }) => {
    return (
        <>
            <p className="Question__ContentText">{content}</p>
        </>
    )
}

export default Question;