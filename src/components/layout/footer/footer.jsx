import React from 'react';
import CSSModules from 'react-css-modules';
import FooterStyle from './style.scss';
const { Component, PropTypes } = React;

@CSSModules(FooterStyle)
export default class Footer extends Component {

  static displayName = 'Footer';

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
      <div styleName="footer" />
    );
  }
}
