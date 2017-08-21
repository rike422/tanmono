import { storiesOf } from '@kadira/storybook';
import React from 'react';
import { Layout } from '../../index';

const { Header, Footer, Content } = Layout;

storiesOf('Layout', module)
  .add('render', () => {

    return (
      <Layout>
        <Header> Header Content</Header>
        <Content> </Content>
        <Footer> FooterContent </Footer>
      </Layout>
    )
  })


