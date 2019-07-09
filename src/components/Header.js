import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Header.css';

const Header = () => {
    return (
        <div className="header-wrapper">
            안녕하세요
            <div className="header">
                <Link to="/" className="item">홈</Link>
                <Link to="/about" className="item">소개</Link>
                <Link to="/rbd" className="item">RBD</Link>
                <Link to="/markdown" className="item">Markdown</Link>
            </div>
        </div>
    );
};

export default Header;