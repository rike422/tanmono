import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Grid from '../grid/grid';

storiesOf('Grid', module)
.add('render', () => (
<div>
  <Grid>grid by div</Grid>
  <Grid tagName={"section"}>grid by section</Grid>
</div>)
)


