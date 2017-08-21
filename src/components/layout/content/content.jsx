import React from 'react';
import CSSModules from 'react-css-modules';
import ContentStyle from './style.scss';
const { Component, PropTypes } = React;

@CSSModules(ContentStyle)
export default class Content extends Component {

  static displayName = 'Content';

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
      <div styleName="content" />
    );
  }
}
