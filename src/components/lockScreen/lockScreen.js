import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './lockScreen.scss';
import Topbar from '../topbar';

class LockScreen extends Component {
  render() {
    return (
      <section className="page swiper-slide">
        <div className="time">
          4:53
        </div>
        <div className="date">
          8月7日 星期四
        </div>
        <div className="slide-unlock">
          > 滑动来解锁
        </div>
      </section>
    );
  }
}

export default withStyles(s)(LockScreen);
