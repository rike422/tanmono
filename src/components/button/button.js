import React from 'react';
let {  PropTypes, Component } = React
import buttonStyle from './style.scss';

const BUTTON_TYPES = ['default', 'primary', 'success', 'warning', 'danger']
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
    theme: PropTypes.object,
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

  /**
   * Update the childProps based on the updated properties of the button.
   */
  componentWillReceiveProps(properties) {
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
  }

  render() {
    let { text, children, type, ...otherProps } = this.props;
    let styleType = buttonStyle[this.props.type]
    return (
      <button
        className={styleType}
        submit={() => { ::this.props.submit || true } }
        { ...otherProps }
      >
        { this.props.children }
      </button>
    );
  }
}
