import React from "react";
import CSSModules from "react-css-modules";
import ButtonStyle from "./style.scss";
import classnames from "classnames";
const { PropTypes, Component } = React;

const BUTTON_TYPES = ['default', 'primary', 'success', 'warning', 'danger'];
const BUTTON_SIZES = ['default', 'large'];

@CSSModules(ButtonStyle, { allowMultiple: true })
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
    loading: PropTypes.bool,
    preventFocusStyleForTouchAndClick: PropTypes.bool
  };
  
  static defaultProps = {
    disabled: false,
    loading: false,
    type: 'default',
    size: 'default',
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
    const { text, children, type, size, loading, ...otherProps } = this.props;
    const style = classnames(type, size, { loading: loading })
    return (
    <button
    styleName={style}
    submit={() => { ::this.props.submit || true } }
    { ...otherProps }
    >
    { this.props.children }
    </button>
    );
  }
}
