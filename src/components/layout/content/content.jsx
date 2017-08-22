import classnames from 'classnames';
import React from 'react';
import CSSModules from 'react-css-modules';
import ContentStyle from './style.scss';

const { Component, PropTypes } = React;

@CSSModules(ContentStyle)
export default class Content extends Component {
  static displayName = 'Content';

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

    const containerClass = ContentStyle.content;
    return React.createElement('div', Object.assign({}, others, {
      className: classnames(className, containerClass)
    }), children);
  }
}
