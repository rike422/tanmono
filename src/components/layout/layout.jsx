import classnames from 'classnames';
import React from 'react';
import CSSModules from 'react-css-modules';
import Content from './content/content';
import Footer from './footer/footer';
import Header from './header/header';
import LayoutStyle from './style.scss';

const { Component, PropTypes } = React;

@CSSModules(LayoutStyle)
class Layout extends Component {
  static displayName = 'Layout';

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

    const containerClass = LayoutStyle.layout;
    return React.createElement('div', Object.assign({}, others, {
      className: classnames(className, containerClass)
    }), children);
  }
}

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;

export default Layout;
