import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import History from '../../core/history';
import s from './dial.scss';

class Dial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      psw: [],
      wrongPsw: false,
    };
  }

  onNumberClick(num) {
    const newPsw = this.state.psw;
    newPsw.push(num);
    if (newPsw.length === 4 && newPsw.join('') !== '0913') {
      this.setState({
        psw: newPsw,
        wrongPsw: true,
      });
      setTimeout(() => {
        this.setState({
          psw: [],
          wrongPsw: false,
        });
      }, 400);
    } else if (newPsw.join('') === '0913') {
      History.push('/start');
    } else {
      this.setState({
        psw: newPsw,
      });
    }
  }

  render() {
    const list = [
      {
        num: 1,
        str: '　',
      }, {
        num: 2,
        str: 'A B C',
      }, {
        num: 3,
        str: 'D E F',
      }, {
        num: 4,
        str: 'G H I',
      }, {
        num: 5,
        str: 'J K L',
      }, {
        num: 6,
        str: 'M N O',
      }, {
        num: 7,
        str: 'P Q R S',
      }, {
        num: 8,
        str: 'T U V',
      }, {
        num: 9,
        str: 'W X Y Z',
      }, {
        num: 0,
        str: '   ',
      }
    ];

    const nums = list.map(v => {
      return (
        <div className="dial-button"
          key={v.num}
          onClick={this.onNumberClick.bind(this, v.num)}>
          <div className="num">{v.num}</div>
          <div className="str">{v.str}</div>
        </div>
      )
    });

    return (
      <section className={this.state.wrongPsw ? 'page unlock-page wrong' : 'page unlock-page'}>
        <div className="password">
          <div className="password-title">输入密码</div>
          <div className="password-dot">
            <div className={!isNaN(this.state.psw[0]) ? 'dot full' : 'dot'}></div>
            <div className={!isNaN(this.state.psw[1]) ? 'dot full' : 'dot'}></div>
            <div className={!isNaN(this.state.psw[2]) ? 'dot full' : 'dot'}></div>
            <div className={!isNaN(this.state.psw[3]) ? 'dot full' : 'dot'}></div>
          </div>
        </div>
        <div className="dial-pad">
          {nums}
        </div>
      </section>
    );
  }
}

export default withStyles(s)(Dial);
