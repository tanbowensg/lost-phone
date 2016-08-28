import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import bg from '../../public/bg2.png';
import Images from '../../components/images';
import Swipe from '../../components/mySwipe';
import s from './start.scss';
import Topbar from '../../components/topbar';
import TEXT from '../../data/text';

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  swipeCallback(index) {
    this.setState({
      index: index,
    });
  }

  render() {
    const swipeOptions = {
      startSlide: 0,
      shortSwipes: false,
      continuous: false,
      callback: this.swipeCallback.bind(this),
    };

    const mainApps = TEXT.apps.map((list, index) => {
      const apps = list.map((app, index2) => {
        return (
          <li className="app" key={index2}>
            <img src={app.icon}
              alt="{app.name}"
              className="app-icon"/>
            <span className="app-name">{app.name}</span>
          </li>
        );
      })
      return (
        <div className="slider" key={index}>
          {apps}
        </div>
      );
    });

    const bottomApps = TEXT.appsBottom.map((app, index) => {
      return (
        <li className="app" key={index}>
          <img src={app.icon} alt={app.name} className="app-icon"/>
          <span className="app-name">{app.name}</span>
        </li>
      )
    });

    const dots = TEXT.apps.map((list, index) => {
      return (
        <div className={this.state.index === index ? 'dot full' : 'dot'}
          key={index}>
        </div>
      );
    });

    dots.push(<div key='3' className={this.state.index === 3 ? 'dot full' : 'dot'} />);

    return (
      <div className="start-page page">
        <img className="backgroud" src={bg}></img>
        <Topbar></Topbar>
        <main className="content">
          <div className="app-wrap">
            <Swipe className="carousel"
              swipeOptions={swipeOptions}>
              {mainApps}
              <div className="slider">
                <p style={{padding:'30px'}}>DEMO 版游戏就到此结束了。这个游戏未来会成为一个带有解密元素的电子小说，敬请期待。</p>
                <p style={{padding:'30px'}}>另外，这个游戏灵感来自于 Replica，第一个谜题也是借鉴了 Replica。</p>
              </div>
            </Swipe>
            <div className="app-pagination">
              {dots}
            </div>
          </div>
          <div className="bottom-bar">
            {bottomApps}
          </div>
        </main>
      </div>
    );
  }
}

export default withStyles(s)(Start);
