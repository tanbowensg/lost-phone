import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import bg from '../../public/bg2.png';
import facebook from '../../public/appicons/facebook.png';
import Swipe from '../../components/mySwipe';
import s from './start.scss';
import Topbar from '../../components/topbar';

class Start extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const swipeOptions = {
      startSlide: 0,
      shortSwipes: false,
      continuous: false,
    };
    return (
      <div className="start-page page">
        <img className="backgroud" src={bg}></img>
        <Topbar></Topbar>
        <main className="content">
          <div className="app-wrap">
            <Swipe className="carousel"
              swipeOptions={swipeOptions}>
              <div className="slider">
                <ul className="app-list">
                  <li className="app">
                    <img src={facebook} alt="" className="app-icon"/>
                    <span className="app-name">facebook</span>
                  </li>
                  <li className="app">
                    <img src={facebook} alt="" className="app-icon"/>
                    <span className="app-name">facebook</span>
                  </li>
                  <li className="app">
                    <img src={facebook} alt="" className="app-icon"/>
                    <span className="app-name">facebook</span>
                  </li>
                  <li className="app">
                    <img src={facebook} alt="" className="app-icon"/>
                    <span className="app-name">facebook</span>
                  </li>
                  <li className="app">
                    <img src={facebook} alt="" className="app-icon"/>
                    <span className="app-name">facebook</span>
                  </li>
                  <li className="app">
                    <img src={facebook} alt="" className="app-icon"/>
                    <span className="app-name">facebook</span>
                  </li>
                  <li className="app">
                    <img src={facebook} alt="" className="app-icon"/>
                    <span className="app-name">facebook</span>
                  </li>
                  <li className="app">
                    <img src={facebook} alt="" className="app-icon"/>
                    <span className="app-name">facebook</span>
                  </li>
                  <li className="app">
                    <img src={facebook} alt="" className="app-icon"/>
                    <span className="app-name">facebook</span>
                  </li>
                  <li className="app">
                    <img src={facebook} alt="" className="app-icon"/>
                    <span className="app-name">facebook</span>
                  </li>
                  <li className="app">
                    <img src={facebook} alt="" className="app-icon"/>
                    <span className="app-name">facebook</span>
                  </li>
                  <li className="app">
                    <img src={facebook} alt="" className="app-icon"/>
                    <span className="app-name">facebook</span>
                  </li>
                  <li className="app">
                    <img src={facebook} alt="" className="app-icon"/>
                    <span className="app-name">facebook</span>
                  </li>
                  <li className="app">
                    <img src={facebook} alt="" className="app-icon"/>
                    <span className="app-name">facebook</span>
                  </li>
                </ul>
              </div>
            </Swipe>
            <div className="app-pagination">
              <div className="dot full"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
          <div className="bottom-bar">
            <li className="app">
              <img src={facebook} alt="" className="app-icon"/>
              <span className="app-name">facebook</span>
            </li>
            <li className="app">
              <img src={facebook} alt="" className="app-icon"/>
              <span className="app-name">facebook</span>
            </li>
            <li className="app">
              <img src={facebook} alt="" className="app-icon"/>
              <span className="app-name">facebook</span>
            </li>
            <li className="app">
              <img src={facebook} alt="" className="app-icon"/>
              <span className="app-name">facebook</span>
            </li>
          </div>
        </main>
      </div>
    );
  }
}

export default withStyles(s)(Start);
