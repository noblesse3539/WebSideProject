import React from 'react';
import '../assets/css/AboutUs.css'
import logo from '../assets/img/logo3.png'

export default class AboutUs extends React.Component {
    render() {
        return (
            <div class="body-wrapper">
                <div class="introduce-init">
                    <img src={logo} class="logo"/>
                    <div class="content">
                        <h1>Creative & Passionate</h1>
                        <h1>Web Developers</h1>
                    </div>
                </div>
                <div class="members">
                    
                </div>
            </div>
        )
    }
}
