import React from 'react';
import assert from 'power-assert';
import Header from 'components/layout/header/header';
import HeaderStyle from 'components/layout/header/style';
import { shallow } from 'enzyme';

describe('<Header>', () => {
  it('class is assingd defalut', () => {
    const layoutHeader = shallow(<Header />);
    assert(HeaderStyle !== undefined);
    assert(layoutHeader !== undefined);
  });
});
