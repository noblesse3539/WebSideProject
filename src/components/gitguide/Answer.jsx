import React, { Component } from 'react';

import AnswerInputForm from './AnswerInputForm';
import { QuestionsConsumer } from './contexts/questions';

class Answer extends Component {
    state = {
        score: 0        // 0: 제출안함, 1: 맞았음, 2: 틀렸음
    }
    
    render() {
        return (
            <>
                <AnswerInputForm />
            </>
        )
    }
}

export default Answer;