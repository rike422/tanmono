import React from 'react';
import CSSModules from 'react-css-modules';
import DemoSectionStyle from './style.scss';
const { Component, PropTypes } = React;

@CSSModules(DemoSectionStyle)
export default class DemoSection extends Component {

  static displayName = 'DemoSection';

  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.node
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
    <section className={DemoSectionStyle.section}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
             {props.children}
    </section>
    );
  }
}
