import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from '../button/button';

storiesOf('Button', module)
  .add('with text', () => (
    <Button type={"default"}>test</Button>
  ))

