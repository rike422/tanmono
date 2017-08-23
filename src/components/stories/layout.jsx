import { storiesOf } from '@storybook/react';
import React from 'react';
import { Layout } from '../../index';

const { Header, Footer, Content } = Layout;

storiesOf('Layout', module)
  .add('render', () => {

    return (
      <Layout>
        <Header> Header Content</Header>
        <Content> Main Content !

          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

        </Content>
        <Footer> FooterContent </Footer>
      </Layout>
    )
  })


