import React, { Component } from 'react';
import { QuestionsConsumer } from './contexts/questions';

class Question extends Component {
    render() {
        return (
            <QuestionsConsumer>
                {
                    ({ state }) => (
                        <div>
                            <h4>{state.basic[0].topic}</h4>
                            <p>{state.basic[0].question}</p>
                        </div>
                    )
                }
            </QuestionsConsumer>
        )
    }
}

export default Question;