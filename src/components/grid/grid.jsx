import React from 'react';
import CSSModules from 'react-css-modules';
import GridStyle from './style.scss';
import classnames from 'classnames';
const { Component, PropTypes } = React;

@CSSModules(GridStyle, { allowMultiple: true })
export default class Grid extends Component {

  static displayName = 'Grid';

  static propTypes = {
    fluid: PropTypes.bool,
    tagName: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    fluid: false,
    tagName: 'div',
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { className, children, fluid, tagName } = this.props;
    const containerClass = GridStyle[fluid ? 'container-fluid' : 'container'];
    return React.createElement(tagName, Object.assign({}, this.props, {
      className: classnames(className, containerClass),
    }), children);
  }
}
