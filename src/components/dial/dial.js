import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './dial.scss';
import Topbar from '../topbar';

class Dial extends Component {
  render() {
    const list = [1,2,3,4,5,6,7,8,9,0];
    const nums = list.map(v => {
      return <div className="dial-button">{v}</div>
    })
    return (
      <section className="page">
        <div className="dial-pad">
          {nums}
        </div>
      </section>
    );
  }
}

export default withStyles(s)(Dial);
