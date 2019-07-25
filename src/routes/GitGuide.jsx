import React from 'react';
import { QuestionsProvider } from '../components/gitguide/contexts/questions';

import Quiz from '../components/gitguide/Quiz';
import '../components/gitguide/css/GitGuide.css';
import GitGuideHeader from '../components/gitguide/GitGuideHeader';
import QuizIndex from '../components/gitguide/QuizIndex';


const GitGuide = () => {
    return (
        <QuestionsProvider>
            <div className="GitGuide__Wrapper">
                <GitGuideHeader />
                <QuizIndex />
                <div className="GitGuide__Quiz">
                    <Quiz />
                </div>
            </div>
        </QuestionsProvider>
    );
}

export default GitGuide;