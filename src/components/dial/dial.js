import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './dial.scss';
import Topbar from '../topbar';

class Dial extends Component {
  render() {
    const list = [
      {
        num:1,
        str: '　',
      }, {
        num:2,
        str: 'A B C',
      }, {
        num:3,
        str: 'D E F',
      }, {
        num:4,
        str: 'G H I',
      }, {
        num:5,
        str: 'J K L',
      }, {
        num:6,
        str: 'M N O',
      }, {
        num:7,
        str: 'P Q R S',
      }, {
        num:8,
        str: 'T U V',
      }, {
        num:9,
        str: 'W X Y Z',
      }, {
        num:0,
        str: '   ',
      }
    ];

    const nums = list.map(v => {
      return (
        <div className="dial-button">
          <div className="num">{v.num}</div>
          <div className="str">{v.str}</div>
        </div>
      )
    });

    return (
      <section className="page">
        <div className="password">
          <div>输入密码</div>
        </div>
        <div className="dial-pad">
          {nums}
        </div>
      </section>
    );
  }
}

export default withStyles(s)(Dial);
