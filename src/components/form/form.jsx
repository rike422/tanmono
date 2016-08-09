import React from 'react';
import CSSModules from 'react-css-modules';
import FormStyle from './style.scss';
const { Component, PropTypes } = React;

const FORM_TYPE = ['basic', 'horizontal', 'inline']

@CSSModules(FormStyle)
export default class Form extends Component {

  static displayName = 'Form';

  static propTypes = {
    layout: PropTypes.string,
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(FORM_TYPE),
  };

  static defaultProps = {
    component: 'form',
    type: 'basic',
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  validate() {

  }

  render() {
    return (
      <Form styleName="form">
        {this.props.children}
      </Form>
    );
  }
};
