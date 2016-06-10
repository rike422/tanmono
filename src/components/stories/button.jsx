import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from '../button/button';

storiesOf('Button', module)
  .add('render', () => {
    <Button type={"default"}>test</Button>
  })

