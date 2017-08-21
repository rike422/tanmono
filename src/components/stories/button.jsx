import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../button/button';

const ProgressButtonWrapper = React.createClass({
  getInitialState() {
    return {
      button1: false,
      button2: false,
    };
  },

  render() {
    return (
      <section>
        <h2>Sizes</h2>
        <div>
          <Button type={'warning'}
                  onClick={() => this.setState({ button1: !this.state.button1 })}
                  loading={this.state.button1}>
            Defalut Button
          </Button>
          <Button type={'danger'}
                  onClick={() => this.setState({ button2: !this.state.button2 })}
                  loading={this.state.button2} size={'large'}>
            Large Button
          </Button>
        </div>
      </section>
    );
  }
});

storiesOf('Button', module)
.add('Buttons', function() {
  return (
    <div>
      <section>
        <h2> Colors </h2>
        <div>
          <Button type={'default'}>test</Button>
          <Button type={'success'}>test</Button>
          <Button type={'warning'}>test</Button>
          <Button type={'danger'}>test</Button>
        </div>
      </section>
      <section>
        <h2>Sizes</h2>
        <div>
          <Button type={'warning'}>Defalut Button</Button>
          <Button type={'danger'} size={'large'}>Large Button</Button>
        </div>
      </section>
    </div>
  );
})
.add('Buttons/Progress', function() {
  return (
    <ProgressButtonWrapper></ProgressButtonWrapper>
  );
})
.add('Buttons/Disabled', function() {
  return (
    <section>
      <h2> Exmaple(nomal)</h2>
      <div>
        <Button type={'default'} disabled={true}>test</Button>
        <Button type={'success'} disabled={true}>test</Button>
        <Button type={'warning'} disabled={true}>test</Button>
        <Button type={'danger'} disabled={true}>test</Button>
      </div>
    </section>
  );
});

