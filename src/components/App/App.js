/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import emptyFunction from 'fbjs/lib/emptyFunction';
import s from './App.scss';
import bluetoothSvg from './bluetooth.svg';

console.log(bluetoothSvg)

class App extends Component {

  static propTypes = {
    context: PropTypes.shape({
      insertCss: PropTypes.func,
      setTitle: PropTypes.func,
      setMeta: PropTypes.func,
    }),
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
  };

  static childContextTypes = {
    insertCss: PropTypes.func.isRequired,
    setTitle: PropTypes.func.isRequired,
    setMeta: PropTypes.func.isRequired,
  };

  getChildContext() {
    const context = this.props.context;
    return {
      insertCss: context.insertCss || emptyFunction,
      setTitle: context.setTitle || emptyFunction,
      setMeta: context.setMeta || emptyFunction,
    };
  }

  componentWillMount() {
    const { insertCss } = this.props.context;
    this.removeCss = insertCss(s);
  }

  componentWillUnmount() {
    this.removeCss();
  }

  render() {
    return (
      <div className="lost-phone">
        <div className="topbar">
          <div className="topbar-left">
            <div className="topbar-item signal">
              <div className="dot full"></div>
              <div className="dot full"></div>
              <div className="dot full"></div>
              <div className="dot empty"></div>
              <div className="dot empty"></div>
            </div>
            <div className="topbar-item service-provider">中国联通</div>
            <div className="topbar-item wifi">
            wifi
            </div>
          </div>
          <div className="topbar-right">
            <div className="topbar-item bluetooth">
              <img src="{bluetoothSvg}" alt="bluetooth" />
            </div>
            <div className="topbar-item battery">
              <span>64%</span>
              <div className="full">
                <div className="left-power"></div>
              </div>
            </div>
          </div>
        </div>
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

export default App;
