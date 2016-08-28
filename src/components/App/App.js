import React, { Component, PropTypes } from 'react';
import emptyFunction from 'fbjs/lib/emptyFunction';
import Store from '../store.js';
import GM from '../gm';
import TEXT from '../../data/text';
import Noty from '../noty';
import s from './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notyData: Store.noty,
    };
  }

  static propTypes = {
    context: PropTypes.shape({
      insertCss: PropTypes.func,
      setTitle: PropTypes.func,
      setMeta: PropTypes.func,
    }),
    children: PropTypes.element.isRequired,
  };

  static childContextTypes = {
    insertCss: PropTypes.func.isRequired,
    setTitle: PropTypes.func.isRequired,
    setMeta: PropTypes.func.isRequired,
  };

  getChildContext() {
    const context = this.props.context;
    return {
      insertCss: context.insertCss,
      setTitle: context.setTitle || emptyFunction,
      setMeta: context.setMeta || emptyFunction,
    };
  }

  componentWillMount() {
    // TODO：暂时把显示noty的逻辑放在这里
    setTimeout(() => {
      const noty = TEXT.noty.FIRST_NOTY;
      noty.show = true;
      this.setState({
        notyData: noty,
      });
    }, 3000);
    const { insertCss } = this.props.context;
    this.removeCss = insertCss(s);
  }

  componentWillUnmount() {
    this.removeCss();
  }

  render() {
    return (
      <div className="lost-phone">
        <Noty show={this.state.notyData.show} notyData={this.state.notyData}/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
