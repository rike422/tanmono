import React from 'react';
import CSSModules from 'react-css-modules';
import MenuStyle from './style.scss';
const { Component, PropTypes } = React;

@CSSModules(MenuStyle)
export default class Menu extends Component {

  static displayName = 'Menu';

  static propTypes = {
    selected: PropTypes.string,
    onSelect: PropTypes.func,
    onClick: PropTypes.func
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className="">
        <div styleName="menu" />
      </nav>
    );
  }
}
