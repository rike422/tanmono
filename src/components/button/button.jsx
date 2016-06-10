import React from 'react';
import ButtonStyle from './style.scss';

const BUTTON_TYPES = ['default', 'primary', 'success', 'warning', 'danger'];

export default class Button extends React.Component {

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

  componentWillReceiveProps(properties) {
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
  }

  render() {
    const { text, children, type, ...otherProps } = this.props;
    const styleType = buttonStyle[this.props.type];
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
