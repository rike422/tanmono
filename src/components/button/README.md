# Button

## Demo

[Demo](https://rike422.github.io/tanmono/?selectedKind=Button) is hosted on GitHub Pages.

## Usage

```jsx
import React from 'react';
import { Button } from 'tanmono';

class ExampleComponent extends React.Component {
  render: () {
    return ( <Button></Button> );
  }
}
```

### Proptypes

| Name | Type | isRequired |
|:----------|:--------:|:--------:|
| desabled | bool | false |
| text | string | false |
| type | oneOf(BUTTON_TYPES) | false |
| submit | bool | false |
| preventFocusStyle | bool | false |

