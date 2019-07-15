import React from 'react';

import '../components/gitguide/css/GitGuide.css';
import Quiz from '../components/gitguide/Quiz';

class GitGuide extends React.Component {
    render() {
        return (
            <div className="GitGuide">
                <Quiz />
            </div>
        );
    }
}

export default GitGuide;