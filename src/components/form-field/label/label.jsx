import React from 'react';
import CSSModules from 'react-css-modules';
import LabelStyle from './style.scss';
const { Component, PropTypes } = React;

@CSSModules(LabelStyle)
export default class Label extends Component {

  static displayName = 'Label';

  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    htmlFor: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div styleName="label" />
    );
  }
}
