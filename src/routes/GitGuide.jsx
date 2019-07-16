import React from 'react';

import Basic, { Advanced } from '../components/gitguide/api/Questions';
import '../components/gitguide/css/GitGuide.css';
import Quiz from '../components/gitguide/Quiz';

class GitGuide extends React.Component {
    // 컴포넌트가 새로 만들어질 때마다 호출되는 '컴포넌트 생성자 함수'
    constructor(props) {
        super(props);

        this.state = {
            courseName: '',
            topic: '',
            questionId: 1,
            question: '',
            answer: '',
            hint: '',
            terminalResult: ''
        };
    }

    // 컴포넌트 출력물이 DOM에 렌더링 된 후에 실행됨
    componentDidMount() {
        const basicCourse = Basic.map(
            question => question)
        console.log(basicCourse);
    }

    render() {
        return (
            <div className="GitGuide">
                <Quiz
                    basicCourse={this.basicCourse}
                />
            </div>
        );
    }
}

export default GitGuide;