import React, { Component } from 'react';
import s from './lockScreen.scss';
import BluetoothSvg from '../svg/bluetooth.js';
import WifiSvg from '../svg/wifi.js';

class LockScreen extends Component {
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
              <WifiSvg></WifiSvg>
            </div>
          </div>
          <div className="topbar-right">
            <div className="topbar-item bluetooth">
              <BluetoothSvg></BluetoothSvg>
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

export default LockScreen;
