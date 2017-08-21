import React from 'react';
import { storiesOf } from '@storybook/react';
import Grid from '../grid/grid';
import Row from '../row/row';
import Col from '../col/col';
import Style from './style';

const { Component, PropTypes } = React;

const Box = (props) => {
  return (
    <Col {...props}>
      <div className={Style[props.type || 'box']}>
           {props.children}
      </div>
    </Col>
  );
};

Box.propTypes = {
  type: PropTypes.oneOf(['row', 'container', 'nested', 'large']).isRequired,
  children: PropTypes.node,
};

storiesOf('Grid', module)
  .add('Responsive', () => (
      <Grid>
        <Row>
          <Box type="row" xs={12} sm={3} md={2} lg={1} />
          <Box type="row" xs={6} sm={6} md={8} lg={10} />
          <Box type="row" xs={6} sm={3} md={2} lg={1} />
        </Row>
        <Row>
          <Box type="row" xs={12} sm={3} md={2} lg={1} />
          <Box type="row" xs={12} sm={9} md={10} lg={11} />
        </Row>
        <Row>
          <Box type="row" xs={10} sm={6} md={8} lg={10} />
          <Box type="row" xs={2} sm={6} md={4} lg={2} />
        </Row>
      </Grid>
    )
  )
  .add('Offset', () => (
      <Row>
        <Box xsOffset={11} xs={1} />
        <Box xsOffset={10} xs={2} />
        <Box xsOffset={9} xs={3} />
        <Box xsOffset={8} xs={4} />
        <Box xsOffset={7} xs={5} />
        <Box xsOffset={6} xs={6} />
        <Box xsOffset={5} xs={7} />
        <Box xsOffset={4} xs={8} />
        <Box xsOffset={3} xs={9} />
        <Box xsOffset={2} xs={10} />
        <Box xsOffset={1} xs={11} />
      </Row>
    )
  ).add('Auto Width', () => (
    <section title="Auto Width" description="Add any number of auto sizing columns to a row. Let the grid figure it out.">
      <Row>
        <Box type="row" xs />
        <Box type="row" xs />
      </Row>
      <Row>
        <Box type="row" xs />
        <Box type="row" xs />
        <Box type="row" xs />
      </Row>
    </section>
  )
);

