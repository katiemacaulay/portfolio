import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';


class App extends Component {
  render() {
    return (
      <div>
        <Button key="key1" href="https://github.com/katiemacaulay/Javascript-211-Checkpoints/tree/checkpoint1" target="_blank" >
        Towers of Hanoi</Button>
        <Button variant=".min-w-100 pa6 br4" key="key2" href="https://github.com/katiemacaulay/Javascript-211-Checkpoints/blob/checkpoint2/checkpoint2/checkpoint2.js" target="_blank">
        Higher Order Functions</Button>
        <Button variant="pa6 br4" key="key3" href="https://katiemacaulay.github.io/checkpoint/checkpoint3/" target="_blank">
        Cookie Clicker</Button>
      </div>
      );
    }
  }
  
  export default App;