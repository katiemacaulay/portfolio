import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import webLogo from './webDesign.jpeg'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WorkTiles from './WorkLinks'
import About from './About'
import Home from './Home'
import Contact from './Contact'

function BasicExample() {
  return (
    <Router>
      <div>
        <div className="flex justify-around bb" >
            <Link to="/" className="navButtons">HOME</Link>
            <Link to="/about/" className="navButtons">ABOUT</Link>
            <div>
              <h1 className="navButtons pl4">Katie Macaulay</h1>
            </div>
            <Link to="/Work/" className="navButtons">WORK</Link>
            <Link to="/Contact" className="navButtons">CONTACT</Link>
        </div>
        <div className= "flex justify-center">
          <img src={webLogo} alt="Katie Macaulay"className="Negative-margin h3"/>
        </div>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/Work/" component={WorkTiles} />
        <Route path="/Contact/" component={Contact} />
      </div>
  </Router>
  );
}

export default BasicExample;