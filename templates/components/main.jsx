import React from 'react';
import Radium = from 'radium';
import classnames from 'classnames';

@Radium
class <%= className %> extends React.Component {
  static propTypes = {
    kind: React.PropTypes.oneOf(['primary', 'warning']).isRequired
  };

  render() {
    // Radium extends the style attribute to accept an array. It will merge
    // the styles in order. We use this feature here to apply the primary
    // or warning styles depending on the value of the `kind` prop. Since its
    // all just JavaScript, you can use whatever logic you want to decide which
    // styles are applied (props, state, context, etc).
    return (
      <<%= className %> theme={theme}>
      </<%= name %>>
    );
  }
}
