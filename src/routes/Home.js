import React from 'react';
import Header from '../components/Header';
import Content from '../components/Content';

import '../assets/css/Main.css';

export default class Home extends React.Component {
    render() {
        return (
            <div style={{height:"100%"}}>
                <div class="main-bg"></div>
                <div id="main">
                    <Header/>
                    <Content />
                </div>
            </div>
        );
    }
};