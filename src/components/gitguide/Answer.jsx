import React, { Component } from 'react';

import AnswerInputForm from './AnswerInputForm';
import { QuestionsConsumer } from './contexts/questions';

class Answer extends Component {
    render() {
        // if (this.props.score === 0) {
        //     return (
        //         <>
        //             <AnswerInputForm />
        //         </>
        //     );
        // }
        // if (this.props.score === 1) {
        //     return (
        //         <>
        //             <p>정답입니다 :)</p>
        //         </>
        //     );
        // }
        return (
            <>
                <AnswerInputForm />
            </>
        )
    }
}

const AnswerContainer = () => (
    <QuestionsConsumer>
        {
            ({ state, actions }) => (
                <Answer
                    // score={state.basic[state.count].score}
                />
            )
        }
    </QuestionsConsumer>
)

export default AnswerContainer;