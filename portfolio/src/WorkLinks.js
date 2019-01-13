import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import StackGrid from "react-stack-grid";


class App extends Component {
  render() {
    return (
      <div>
        <StackGrid className="mt5" columnWidth={350}>
          <Button className="webLinks" href="https://github.com/katiemacaulay/Javascript-211-Checkpoints/tree/checkpoint1" target="_blank" >
          Towers of Hanoi</Button>
          <Button className="webLinks" key="key2" href="https://github.com/katiemacaulay/Javascript-211-Checkpoints/blob/checkpoint2/checkpoint2/checkpoint2.js" target="_blank">
          Higher Order Functions</Button>
          <Button className=" webLinks" key="key3" href="https://katiemacaulay.github.io/checkpoint/checkpoint3/" target="_blank">
          Cookie Clicker</Button>
        </StackGrid>
      </div>
      );
    }
  }
  
  export default App;