import React, { Component } from 'react';
import './App.css';
import profilePic from './main.jpg';


class About extends Component {
    render() {
      return (
        <div className="flex justify-center">
             <img src={profilePic} alt="Katie Macaulay" className=" mr5 mt2 vh-75 bw1 br bb"/>
            <div className="mt5">
                <h1>About Me!</h1>
                <p>I love coding, making music, and learning.</p>
            </div>
        </div>
      );
    }
  }
  
  export default About;