import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Router, Route, Link } from 'react-router-dom'
import { Home, Aboutus, Login } from './pages'
function App() {
  return (

    <BrowserRouter>
      <div className="App">
          <Route exact path="/" component={Home}/>
          <Route exact path="/Aboutus" component={Aboutus}/>
          <Route exact path="/Login" component={Login}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
