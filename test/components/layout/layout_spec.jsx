import React from 'react';
import assert from 'power-assert';
import Layout from 'components/layout/layout';
import LayoutStyle from 'components/layout/style';
import { shallow } from 'enzyme';

describe('<Layout>', () => {
  it('class is assingd defalut', () => {
    const layout = shallow(<Layout />);
    assert(LayoutStyle !== undefined);
    assert(layout !== undefined);
  });
});
