import React from 'react';
import CSSModules from 'react-css-modules';
import FormFieldStyle from './style.scss';
const { Component, PropTypes } = React;

@CSSModules(FormFieldStyle)
export default class FormField extends Component {

  static displayName = 'FormField';

  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    readonly: PropTypes.bool,
    label: PropTypes.string,
    formFor: PropTypes.string,
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
      <div styleName="form-field" />
    );
  }
}
