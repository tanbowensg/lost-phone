import React, { Component, PropTypes } from 'react';
import LockScreen from '../lockScreen';
import s from './App.scss'
import Topbar from '../topbar';
import Dial from '../dial';

class App extends Component {

  static propTypes = {
    context: PropTypes.shape({
      insertCss: PropTypes.func,
    }),
  };

  static childContextTypes = {
    insertCss: PropTypes.func.isRequired,
  };

  getChildContext() {
    const context = this.props.context;
    return {
      insertCss: context.insertCss || emptyFunction,
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
        <Topbar></Topbar>
        <Dial></Dial>
      </div>
    )
  }
}

export default App;
