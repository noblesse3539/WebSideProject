import React from 'react';

import CourseName from './CourseName';

class Quiz extends React.Component {
    render() {
        return (
            <div className="quiz">
                <CourseName name="Basic" />
            </div>
        )
    }
}

export default Quiz;