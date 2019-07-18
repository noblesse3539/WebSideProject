import React from 'react';
import Quiz from '../components/gitguide/Quiz';
import '../components/gitguide/css/GitGuide.css'
import { QuestionsProvider } from '../components/gitguide/contexts/questions';

const GitGuide = () => {
    return (
        <QuestionsProvider>
            <div className="GitGuide">
                <Quiz />
            </div>
        </QuestionsProvider>
    );
}

export default GitGuide;