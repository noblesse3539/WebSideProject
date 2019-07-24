import React from 'react';
import { QuestionsProvider } from '../components/gitguide/contexts/questions';

import Quiz from '../components/gitguide/Quiz';
import '../components/gitguide/css/GitGuide.css';
import GitGuideHeader from '../components/gitguide/GitGuideHeader';


const GitGuide = () => {
    return (
        <QuestionsProvider>
            <div className="GitGuide__Wrapper">
                <div className="GitGuide__Header">
                    <GitGuideHeader />
                </div>
                <div className="GitGuide__Quiz">
                    <Quiz />
                </div>
            </div>
        </QuestionsProvider>
    );
}

export default GitGuide;