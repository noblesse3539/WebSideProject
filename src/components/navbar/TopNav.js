import React from 'react';
import { Link } from 'react-router-dom';
import './TopNav.scss';

export default class Header extends React.Component {
    render() {
        return (
            <div className="topnav-wrapper">
                <div className="topnav-flex">
                    <div className="left">
                        <Link to="/" className="item">WEBENGERS</Link>
                    </div>
                    <div className="right">
                        <Link to="/course" className="item">COURSE</Link>
                    </div>
                </div>
            </div>
        );
    }
};