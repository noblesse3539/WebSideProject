import React from 'react';
import 'assets/sass/AboutUs.scss'
import logo from 'assets/img/logo3.png'

export default class AboutUs extends React.Component {
    render() {
        return (
            <div className="body-wrapper">
                <div className="section sec-1">
                    <img src={logo} className="logo" alt="webengers-logo"/>
                    <div className="content">
                        <h1>Creative & Passionate</h1>
                        <h1>Web Developers</h1>
                    </div>
                </div>
                <div className="section sec-2">
                </div>
                <div className="section sec-3">
                </div>
            </div>
        )
    }
}
