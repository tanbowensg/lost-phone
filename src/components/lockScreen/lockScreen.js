import React, { Component } from 'react';
import s from './lockScreen.scss';
import Topbar from '../topbar';

class LockScreen extends Component {
  render() {
    return (
      <div className="lost-phone">
        <Topbar></Topbar>
        <div className="time">
          4:53
        </div>
        <div className="date">
          8月7日 星期四
        </div>
        <div className="slide-unlock">
          > 滑动来解锁
        </div>
      </div>
    );
  }
}

export default LockScreen;
