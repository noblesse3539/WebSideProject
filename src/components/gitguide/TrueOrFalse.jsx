import React from 'react';
import './TrueOrFalse.scss';

export default class TrueOrFalse extends React.Component {
    render() {
        if (this.props.score === 1) {
            return (
                <TrueRender
                    trueMessage={this.props.trueMessage}
                />
            )
        }
        if (this.props.score === 2) {
            return (
                <FalseRender 
                    answer={this.props.answer}
                />
            );
        }
    }
}

const TrueRender = ({ trueMessage }) => {
    return (
        <>
            <p className="TrueOrFalse__True">{trueMessage}</p>
        </>
    );
};

const FalseRender = ({ answer }) => {
    return (
        <>
            <span className="TrueOrFalse__False">
                정답이 아니라도 실망하지 마세요! :) <br />
                정답은 <i>{answer}</i>입니다.
            </span>
        </>
    );
};