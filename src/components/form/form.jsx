import React from 'react';
import CSSModules from 'react-css-modules';
import FormStyle from './style.scss';
const { Component, PropTypes } = React;

@CSSModules(FormStyle)
export default class Form extends Component {

  static displayName = 'Form';

  static propTypes = {
    layout: PropTypes.string,
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div styleName="form" />
    );
  }
}
