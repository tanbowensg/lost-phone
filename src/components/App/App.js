import React, { Component, PropTypes } from 'react';
import ReactSwipe from 'react-swipe';
import LockScreen from '../lockScreen';
import bg from '../../public/bg.jpg';
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
        <img className="backgroud" src={bg}></img>
        <Topbar></Topbar>
        <main className="content">
          <ReactSwipe className="carousel"
            swipeOptions={{continuous: false}}
            startSlide={1}>
            <div className="slider">
              <Dial></Dial>
            </div>
            <div className="slider">
              <LockScreen></LockScreen>
            </div>
          </ReactSwipe>
        </main>
      </div>

    )
  }
}

export default App;
