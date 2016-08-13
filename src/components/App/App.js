import React, { Component } from 'react';
import LockScreen from '../lockScreen';
import s from './App.scss'
import Topbar from '../topbar';
import Dial from '../dial';

class App extends Component {
  render() {
    return (
      <div className="lost-phone">
        <Topbar></Topbar>
        <Dial></Dial>
      </div>
    )
  }
}

export default App;
