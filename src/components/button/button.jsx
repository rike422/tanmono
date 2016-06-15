import React from "react";
import CSSModules from "react-css-modules";
import ButtonStyle from "./style.scss";
const { PropTypes, Component } = React;

const BUTTON_TYPES = ['default', 'primary', 'success', 'warning', 'danger'];

@CSSModules(ButtonStyle)
export default class Button extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  static displayName = 'Button';

  static propTypes = {
    disabled: PropTypes.bool,
    text: PropTypes.string,
    type: PropTypes.oneOf(BUTTON_TYPES),
    submit: PropTypes.bool,
    preventFocusStyleForTouchAndClick: PropTypes.bool
  };

  static defaultProps = {
    primary: false,
    disabled: false,
    type: 'default',
  };

  componentWillMount() {
  }

  componentWillReceiveProps(properties) {
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
  }

  render() {
    const { text, children, type, ...otherProps } = this.props;
    return (
    <button
      styleName={type}
      submit={() => { ::this.props.submit || true } }
      { ...otherProps }
    >
      { this.props.children }
    </button>
    );
  }
}
