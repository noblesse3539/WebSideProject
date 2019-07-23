import React from 'react';
import { Link } from 'react-router-dom';
import './TopNav.scss';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header-wrapper">
                <div className="header-flex">
                    <div className="left">
                        <div className="logo">
                            <Link to="/" className="item">WEBENGERS</Link>
                        </div>
                    </div>
                    <div className="right">
                        <Link to="/" className="item">홈</Link>
                        <Link to="/aboutus" className="item">소개</Link>
                        <Link to="/rbd" className="item">RBD</Link>
                        <Link to="/markdown" className="item">Markdown</Link>
                    </div>
                </div>
            </div>
        );
    }
};