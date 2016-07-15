import React from 'react';
import CSSModules from 'react-css-modules';
import FormInputStyle from './style.scss';
const { Component, PropTypes } = React;

@CSSModules(FormInputStyle)
export default class FormInput extends Component {

  static displayName = 'FormInput';

  static propTypes = {
    id: PropTypes.string,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    readonly: PropTypes.bool,
    type: PropTypes.string,
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div styleName="form-input" />
    );
  }
}
