import React from 'react';
import CSSModules from 'react-css-modules';
import LayoutStyle from './style.scss';
const { Component, PropTypes } = React;

@CSSModules(LayoutStyle)
export default class Layout extends Component {

  static displayName = 'Layout';

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
      <div styleName="layout" />
    );
  }
}
