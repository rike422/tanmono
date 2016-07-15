import React from 'react';
import CSSModules from 'react-css-modules';
import ButtonStyle from './style.scss';
import classnames from 'classnames';
const { PropTypes, Component } = React;

const BUTTON_TYPES = ['default', 'primary', 'success', 'warning', 'danger'];
const BUTTON_SIZES = ['default', 'large'];

@CSSModules(ButtonStyle, { allowMultiple: true })
export default class Button extends Component {

  static displayName = 'Button';

  static propTypes = {
    disabled: PropTypes.bool,
    text: PropTypes.string,
    type: PropTypes.oneOf(BUTTON_TYPES),
    size: PropTypes.oneOf(BUTTON_SIZES),
    submit: PropTypes.bool,
    loading: PropTypes.bool,
    children: PropTypes.node,
    preventFocusStyleForTouchAndClick: PropTypes.bool,
  };

  static defaultProps = {
    disabled: false,
    loading: false,
    type: 'default',
    size: 'default',
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
  }

  componentWillReceiveProps() {
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
  }

  render() {
    const { type, size, loading, ...otherProps } = this.props;
    const style = classnames(type, size, { loading });
    return (
      <button
        styleName={style}
        submit={() => ::this.props.submit || true}
        {...otherProps}
      >
        {this.props.children}
      </button>
    );
  }
}
