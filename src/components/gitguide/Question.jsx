import React, { Component } from 'react';
import QuestionDetail from './QuestionDetail';
import { QuestionsConsumer } from './contexts/questions';

class Question extends Component {
    render() {
        return (
            <QuestionsConsumer>
                {
                    ({ state, actions }) => (
                        <div>
                            <button onClick={actions.prevQuestion}>이전문제</button>
                            <button onClick={actions.nextQuestion}>다음문제</button>
                            <QuestionDetail questionId={state.count} />
                        </div>
                    )
                }
            </QuestionsConsumer>
        )
    }
}

export default Question;