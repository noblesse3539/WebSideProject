import React from 'react';

import QuestionCourse from './QuestionCourse';
import QuestionTopic from './QuestionTopic';
import QuestionContent from './QuestionContent';

class Question extends React.Component {
    render() {
        return (
            <div className="Question">
                <QuestionCourse courseName="Basic" />
                <QuestionTopic topicName="새로운 저장소 만들기" />
                <QuestionContent question="프로젝트 폴더를 생성하여 Git으로 관리하려고 합니다. 새로 생성한 폴더를 Git 저장소로 초기화하는 명령어를 입력하세요." />
            </div>
        );
    }
}

export default Question;