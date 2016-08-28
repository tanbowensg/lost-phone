import React, { Component, PropTypes } from 'react';
import emptyFunction from 'fbjs/lib/emptyFunction';
import Store from '../store.js';
import GM from '../gm';
import TEXT from '../../data/text';
import Noty from '../noty';
import s from './App.scss';
import Images from '../../components/images';

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
    const { insertCss } = this.props.context;
    this.removeCss = insertCss(s);
  }

  componentDidMount() {
    // TODO：暂时把显示noty的逻辑放在这里
    setTimeout(() => {
      this.setState({
        notyShow: true,
        notyData: TEXT.noty.FIRST_NOTY,
      });
    }, 15000);
  }

  closeNoty() {
    this.setState({
      notyShow: false,
    });
  }

  componentWillUnmount() {
    this.removeCss();
  }

  render() {
    return (
      <div className="lost-phone" key="213">
        <Noty show={this.state.notyShow}
          closeNoty={this.closeNoty.bind(this)}
          notyData={this.state.notyData}/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
