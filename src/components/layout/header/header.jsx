import React from 'react';
import CSSModules from 'react-css-modules';
import HeaderStyle from './style.scss';
const { Component, PropTypes } = React;

@CSSModules(HeaderStyle)
export default class Header extends Component {

  static displayName = 'Header';

  static propTypes = {
    style: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div styleName="header" />
    );
  }
}
