import classnames from 'classnames';
import React from 'react';
import CSSModules from 'react-css-modules';
import FooterStyle from './style.scss';

const { Component, PropTypes } = React;

@CSSModules(FooterStyle)
export default class Footer extends Component {
  static displayName = 'Footer';

  static propTypes = {
    style: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node
  };

  static defaultProps = {};

  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    const { className, children, ...others } = this.props;

    const containerClass = FooterStyle.footer;
    return React.createElement('div', Object.assign({}, others, {
      className: classnames(className, containerClass)
    }), children);
  }
}
