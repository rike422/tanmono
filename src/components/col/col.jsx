import React from 'react';
import CSSModules from 'react-css-modules';
import ColStyle from './style.scss';
import classnames from 'classnames';
const { Component, PropTypes } = React;

const MODIFICATOR_TYPE = PropTypes.oneOfType([PropTypes.number, PropTypes.bool]);

@CSSModules(ColStyle)
export default class Col extends Component {
  static displayName = 'Col';

  static propTypes = {
    xs: MODIFICATOR_TYPE,
    sm: MODIFICATOR_TYPE,
    md: MODIFICATOR_TYPE,
    lg: MODIFICATOR_TYPE,
    xsOffset: PropTypes.number,
    smOffset: PropTypes.number,
    mdOffset: PropTypes.number,
    lgOffset: PropTypes.number,
    className: PropTypes.string,
    tagName: PropTypes.string,
    children: PropTypes.node
  };

  static defaultProps = {
    tagName: 'div'
  };

  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    const { xs, sm, md, lg, xsOffset, smOffset, mdOffset, lgOffset } = this.props;
    const { className, children, tagName } = this.props;

    const classes = classnames({
      [ColStyle['col-xs']]: xs === true,
      [ColStyle['col-sm']]: sm === true,
      [ColStyle['col-md']]: md === true,
      [ColStyle['col-lg']]: lg === true,

      [ColStyle[`col-xs-${xs}`]]: xs && xs !== true,
      [ColStyle[`col-sm-${sm}`]]: sm && sm !== true,
      [ColStyle[`col-md-${md}`]]: md && md !== true,
      [ColStyle[`col-lg-${lg}`]]: lg && lg !== true,

      [ColStyle[`col-xs-offset-${xsOffset}`]]: xsOffset,
      [ColStyle[`col-sm-offset-${smOffset}`]]: smOffset,
      [ColStyle[`col-md-offset-${mdOffset}`]]: mdOffset,
      [ColStyle[`col-lg-offset-${lgOffset}`]]: lgOffset
    }, className);

    return React.createElement(tagName || 'div', Object.assign({}, this.props, {
      className: classnames(className, classes)
    }), children);
  }
}
