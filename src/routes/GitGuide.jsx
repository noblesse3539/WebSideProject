import React from 'react';
import ChapterList from '../components/gitguide/ChapterList';

class GitGuide extends React.Component {
    state = {
        basic: [
            {
                id: 1,
                topic: '새로운 저장소 만들기',
                question: '프로젝트를 생성하여 Git으로 관리하려고 합니다. 폴더를 하나 새로 만들고, 해당 폴더를 Git 저장소로 초기화하는 명령어를 입력하세요.',
                sampleCode: 'git ____',
                answer: 'git init',
                followingTerminal: '',
            },
            {
                id: 2,
                topic: '다른 저장소 받아오기',
                question: '친구 창오와 함께 프로젝트를 진행하려고 합니다. 창오의 스켈레톤 코드가 담긴 원격 저장소를 받아오려고 합니다. 다음과 같은 주소를 가진 저장소를 나의 컴퓨터 환경에 받아오기 위한 명령어를 입력하세요.',
                sampleCode: '___ _____ https://github.com/yooco0618/GitGuide.git',
                answer: 'git clone https://github.com/yooco0618/GitGuide.git',
                followingTerminal: '',
            }
        ]
    }
    
    render() {
        const { basic } = this.state;

        return (
            <div class="wrapper">
                <ChapterList basic={basic} />
            </div>
        )
    }
}

export default GitGuide;