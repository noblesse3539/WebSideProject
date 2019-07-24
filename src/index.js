import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from 'routes/Home';
import AboutUs from 'routes/AboutUs';
import Markdown from 'routes/Markdown';
import GitGuide from 'routes/GitGuide';
import Course from 'routes/Course'

import './index.scss'

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="body-wrapper">
                    <Route exact path="/" component={Home}/>
                    <Route path="/aboutus" component={AboutUs}/>
                    <Route path="/markdown" component={Markdown}/>
                    <Route path="/gitguide" component={GitGuide}/>
                    <Route path="/course" component={Course}/>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
