import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './routes/Home';
import AboutUs from './routes/AboutUs';
import Markdown from './routes/Markdown';
import GitGuide from './routes/GitGuide';

import rbd from './components/rbd';
import Header from './components/Header';
import Content from './components/Content';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div class="main-wrapper">
                    <div class="main-bg"></div>
                    <div id="main">
                        <Header/>
                        <Route exact path="/" component={Home}/>
                        <Route path="/aboutus" component={AboutUs}/>
                        <Route path="/rbd" component={rbd}/>
                        <Route path="/markdown" component={Markdown}/>
                        <Route path="/gitguide" component={GitGuide}/>
                    </div>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
