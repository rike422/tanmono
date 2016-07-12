import React from 'react';
import CSSModules from 'react-css-modules';
import RowStyle from './style.scss';
import classnames from 'classnames';
const { Component, PropTypes } = React;

const MODIFIER_TYPE = PropTypes.oneOf(['xs', 'sm', 'md', 'lg']);
const MODIFIER_KEYS = ['start', 'center', 'end', 'top', 'middle',
                       'bottom', 'around', 'between', 'first', 'last'];

@CSSModules(RowStyle, { allowMultiple: true })
export default class Row extends Component {
  static displayName = 'Row';

  static propTypes = {
    reverse: PropTypes.bool,
    start: MODIFIER_TYPE,
    center: MODIFIER_TYPE,
    end: MODIFIER_TYPE,
    top: MODIFIER_TYPE,
    middle: MODIFIER_TYPE,
    bottom: MODIFIER_TYPE,
    around: MODIFIER_TYPE,
    between: MODIFIER_TYPE,
    first: MODIFIER_TYPE,
    last: MODIFIER_TYPE,
    className: PropTypes.string,
    tagName: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    revers: false,
    tagName: 'div',
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const modificators = [RowStyle.row];
    const { reverse, className, children, tagName } = this.props;

    modificators.push(
      MODIFIER_KEYS.reduce((memo, key) => {
        const value = this.props[key];
        if (value == null) return memo;
        return Object.assign(memo, {
          [RowStyle[`${key}-${value}`]]: true,
        });
      }, {})
    );

    if (reverse) {
      modificators.push(RowStyle.reverse);
    }

    return React.createElement(tagName, Object.assign({}, this.props, {
      className: classnames(className, modificators),
    }), children);
  }
}
