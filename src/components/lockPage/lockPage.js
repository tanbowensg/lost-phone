import React, { Component } from 'react';
import Swipe from '../mySwipe';
import LockScreen from '../lockScreen';
import bg from '../../public/bg.jpg';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './lockPage.scss';
import Topbar from '../topbar';
import Dial from '../dial';

const SwipeCfg = {
  MinBright: 0.5,
  MaxBlur: 20,
  BlurStart: 0.5,
};

class LockPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgStyle: {
        filter: 'blur(0px) brightness(1)',
      },
      swipeIndex: 1,
    };
  }

  // 改变背景的明度和模糊
  onSwiping(progress) {
    if ((this.state.swipeIndex === 0 && progress < 0) ||
      this.state.swipeIndex === 1 && progress > 0) {
      return false;
    }
    const percent = Math.abs(progress);
    let blur = 0;
    let bright = 0;
    switch (this.state.swipeIndex) {
      // 密码盘界面的滑动
      case 0:
        if (percent < SwipeCfg.BlurStart) {
          blur = SwipeCfg.MaxBlur *
            (1 - percent / SwipeCfg.BlurStart);
        }
        bright = SwipeCfg.MinBright + (1 - SwipeCfg.MinBright) * percent;
        break;
      // 锁屏界面的滑动
      case 1:
        if (percent > SwipeCfg.BlurStart) {
          blur = SwipeCfg.MaxBlur *
            (percent - SwipeCfg.BlurStart) / SwipeCfg.BlurStart;
        }
        bright = 1 - (1 - SwipeCfg.MinBright) * percent;
        break;
      default:
    }

    // 检查blur是否超出最大值
    if (SwipeCfg.MaxBlur * percent > SwipeCfg.MaxBlur) {
      blur = SwipeCfg.MaxBlur;
    }

    // 检查brightness是否超出最小值
    if (bright > 1) {
      bright = 1;
    } else if (bright < SwipeCfg.MinBright) {
      bright = SwipeCfg.MinBright;
    }

    this.setState({
      bgStyle: {
        '-webkit-filter': `blur(${blur}px) 
          brightness(${bright})`,
      },
    });
    return false;
  }

  swipeCallback(index) {
    if (index === 0) {
      this.setState({
        bgStyle: {
          '-webkit-filter': `blur(${SwipeCfg.MaxBlur}) 
            brightness(${SwipeCfg.MinBright})`,
        },
        swipeIndex: index,
      });
    } else if (index === 1) {
      this.setState({
        bgStyle: {
          '-webkit-filter': `blur(0) 
            brightness(1)`,
        },
        swipeIndex: index,
      });
    }
  }

  render() {
    const that = this;
    const swipeOptions = {
      startSlide: 1,
      shortSwipes: false,
      continuous: false,
      swiping: that.onSwiping.bind(that),
      // callback: that.swipeCallback.bind(that),
      transitionEnd: that.swipeCallback.bind(that),
    };
    return (
      <div className="lock-page">
        <img className="backgroud" src={bg} style={this.state.bgStyle}></img>
        <Topbar></Topbar>
        <main className="content">
          <Swipe className="carousel"
            swipeOptions={swipeOptions}>
            <div className="slider">
              <Dial></Dial>
            </div>
            <div className="slider">
              <LockScreen></LockScreen>
            </div>
          </Swipe>
        </main>
      </div>

    )
  }
}

export default withStyles(s)(LockPage);
