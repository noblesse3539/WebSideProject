import React from 'react';
import update from 'immutability-helper';

import Question from '../components/gitguide/Question';
import Quiz from '../components/gitguide/Quiz';
import quizQuestions from '../components/gitguide/api/quizQuestions';
import Result from '../components/gitguide/Result';

class GitGuide extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            questionId: 1,
            question: '',
            answerOptions: [],
            answer: '',
            answersCount: {
                nintendo: 0,
                microsoft: 0,
                sony: 0,
            },
            result: '',
        };

        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    }


    // 초기 렌더링이 발생하기 직전에 클라이언트와 서버 양측에 한 번 적용된다.
    componentWillMount() {
        const shuffledAnswerOptions = quizQuestions.map(
            (question) => this.shuffleArray(question.answers)
        );
        this.setState({
            question: quizQuestions[0].question,
            answerOptions: shuffledAnswerOptions[0]
        });
    }

    shuffleArray(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };

    // setting the answer & setting the next question
    handleAnswerSelected(event) {
        this.setUserAnswer(event.currentTarget.value);
        if (this.state.questionId < quizQuestions.length) {
            setTimeout(() => this.setNextQuestion(), 300);
        } else {
            setTimeout(() => this.setResults(this.getResults()), 300);
        }
    }

    setUserAnswer(answer) {
        const updatedAnswersCount = update(this.state.answersCount, {
            [answer]: { $apply: (currentValue) => currentValue + 1 }
        });
        this.setState({
            answersCount: updatedAnswersCount,
            answer: answer
        });
    }

    // handleAnswerSelected의 결과값에 따라
    // 다음 질문을 보여주기 위해 state를 변경한다.
    setNextQuestion() {
        const counter = this.state.counter + 1;
        const questionId = this.state.questionId + 1;
        this.setState({
            counter: counter,
            questionId: questionId,
            question: quizQuestions[counter].question,
            answerOptions: quizQuestions[counter].answers,
            answer: '',
        });
    }

    // handleAnswerSelected의 결과값에 따라
    getResults() {
        const answersCount = this.state.answersCount;
        const answersCountKeys = Object.keys(answersCount);
        const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
        const maxAnswerCount = Math.max.apply(null, answersCountValues);
        return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
    }

    // getResults()의 배열 형태의 결과값을 받아서, 배열이 하나의 value를 가지고 있는지 확인한다. 
    setResults(result) {
        if (result.length === 1) {
            this.setState({
                result: result[0]
            });
        } else {
            this.setState({
                result: 'Undetermined'
            });
        }
    }

    // state = {
    //     basic: [
    //         {
    //             id: 1,
    //             topic: '새로운 저장소 만들기',
    //             question: '프로젝트를 생성하여 Git으로 관리하려고 합니다. 폴더를 하나 새로 만들고, 해당 폴더를 Git 저장소로 초기화하는 명령어를 입력하세요.',
    //             sampleCode: 'git ____',
    //             answer: 'git init',
    //             followingTerminal: '',
    //         },
    //         {
    //             id: 2,
    //             topic: '다른 저장소 받아오기',
    //             question: '친구 창오와 함께 프로젝트를 진행하려고 합니다. 창오의 스켈레톤 코드가 담긴 원격 저장소를 받아오려고 합니다. 다음과 같은 주소를 가진 저장소를 나의 컴퓨터 환경에 받아오기 위한 명령어를 입력하세요.',
    //             sampleCode: '___ _____ https://github.com/yooco0618/GitGuide.git',
    //             answer: 'git clone https://github.com/yooco0618/GitGuide.git',
    //             followingTerminal: '',
    //         }
    //     ]
    // }

    renderQuiz() {
        return (
            <Quiz
                answer={this.state.answer}
                answerOptions={this.state.answerOptions}
                qustionId={this.state.questionId}
                question={this.state.question}
                questionTotal={quizQuestions.length}
                onAnswerSelected={this.handleAnswerSelected}
            />

        )
    }

    renderResult() {
        return (
            <Result quizResult={this.state.result} />
        )
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Quiz</h2>
                </div>
                {this.state.result ? this.renderResult() : this.renderQuiz()}
            </div>
        )
    }
}

export default GitGuide;