import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './topbar.scss';
import BluetoothSvg from '../svg/bluetooth.js';
import WifiSvg from '../svg/wifi.js';

class Topbar extends Component {
  render() {
    return (
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
    );
  }
}

export default withStyles(s)(Topbar);
