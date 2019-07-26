import React from 'react';
import { QuestionsProvider } from '../components/gitguide/contexts/questions';
import Header from '../components/navbar/TopNav';
import Quiz from '../components/gitguide/Quiz';
import './GitGuide.scss';
import GitGuideHeader from '../components/gitguide/GitGuideHeader';
import QuizIndex from '../components/gitguide/QuizIndex';


const GitGuide = () => {
    return (
        <QuestionsProvider>
            <Header />
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