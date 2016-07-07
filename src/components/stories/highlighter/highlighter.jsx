import React from 'react';
import CSSModules from 'react-css-modules';
import HighlighterStyle from './style.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';
const { Component, PropTypes } = React;

@CSSModules(HighlighterStyle)
export default class Highlighter extends Component {

  static displayName = 'Highlighter';

  static propTypes = {
    code: PropTypes.string,
  };

  static defaultProps = {
    code: '',
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { code } = this.props;
    return (
    <div className="">
      <SyntaxHighlighter language='javascript' style={docco}>{code}
      </SyntaxHighlighter>
    </div>
    )
  }
}
