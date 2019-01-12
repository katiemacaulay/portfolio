import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import webLogo from './webDesign.jpeg'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WorkTiles from './WorkLinks'
import About from './About'
import Home from './Home'

function BasicExample() {
  return (
    <Router>
      <div>
        <div className="flex justify-center bb" >
            <Link to="/" className="mt4 mr3 no-underline"><Button>Home</Button></Link>
            <Link to="/about/" className="mt4 mr3 no-underline"><Button>About</Button></Link>
            <div>
              <h1 className="mr4 ml5 mb4 mt4">Katie Macaulay</h1>
            </div>
            <Link to="/Work/" className="mt4 mr3 no-underline"><Button>Work</Button></Link>
            <Button variant="outlined ba b--white mr2">Contact</Button>
        </div>
        <div className= "flex justify-center">
          <img src={webLogo} className="Negative-margin h3"/>
        </div>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/Work/" component={WorkTiles} />
      </div>
  </Router>
  );
}

function Work({ match }) {
  return (
    <div>
      <h2>Work</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

export default BasicExample;