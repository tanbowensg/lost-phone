import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './noty.scss';

class Dial extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.show) {
      // 5秒后自动消失
      // setTimeout(() => {
      //   this.props.closeNoty();
      // }, 5000);
    }
  }

  render() {
    return (
      <div className={this.props.show ? 'noty show' : 'noty'}
        onClick={this.props.closeNoty}>
        <img src={this.props.notyData.icon} alt="233" className="noty-icon"/>
        <div className='noty-main'>
          <span className='noty-name'>{this.props.notyData.name}</span>
          <span className='noty-time'>{this.props.notyData.time}</span>
          <p className='noty-content'>{this.props.notyData.content}</p>
        </div>
        <div className='drag-bar'></div>
      </div>
    );
  }
}

export default withStyles(s)(Dial);
