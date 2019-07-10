import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './routes/Home';
import About from './routes/About';
import Markdown from './routes/Markdown';
import GitGuide from './routes/GitGuide';

import rbd from './components/rbd';
import Header from './components/Header';

import './assets/css/Main.css';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div class="main-bg"></div>
                <div id="main">
                    <Header/>
                    <Content />
                </div>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/rbd" component={rbd}/>
                <Route path="/markdown" component={Markdown}/>
                <Route path="/gitguide" component={GitGuide}/>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
