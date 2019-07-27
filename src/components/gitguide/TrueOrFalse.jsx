import React from 'react';
import './TrueOrFalse.scss';

export default class TrueOrFalse extends React.Component {
    render() {
        if (this.props.score === 1) {
            return (
                <TrueRender />
            );
        }
        if (this.props.score === 2) {
            return (
                <FalseRender />
            );
        }
        return false;
    }
}

const TrueRender = () => {
    return (
        <>
            <p className="TrueOrFalse__True">마 정답이다,,,</p>
        </>
    );
};

const FalseRender = () => {
    return (
        <>
            <p className="TrueOrFalse__False">마 틀렸다,,,</p>
        </>
    );
};