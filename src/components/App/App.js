import React, { Component } from 'react';
import LockScreen from '../lockScreen';

class App extends Component {
  render() {
    return (
      <div className="lost-phone">
        <LockScreen></LockScreen>
      </div>
    )
  }
}

export default App;
