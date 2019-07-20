import React, { Component } from 'react';
import Question from './Question';
import Answer from './Answer';
import { QuestionsConsumer } from './contexts/questions';

class Quiz extends Component {
    state = {
        score: 0,
    }

    render() {
        return (
            <QuestionsConsumer>
                {
                    ({ state, actions }) => (
                        <div className="Quiz">
                            <div className="Quiz__Question">
                                <Question />
                            </div>
                            <div className="Quiz__Answer">
                                <Answer />
                            </div>
                        </div>
                    )
                }
            </QuestionsConsumer>
        );
    }
}

export default Quiz;