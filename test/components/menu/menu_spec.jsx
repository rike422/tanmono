import React from 'react';
import assert from 'power-assert';
import Menu from 'components/menu/menu';
import MenuStyle from 'components/menu/style';
import { shallow } from 'enzyme';

describe('<Menu>', () => {
  it('class is assingd defalut', () => {
    const menu = shallow(<Menu />);
    assert(MenuStyle !== undefined);
    assert(menu !== undefined);
  });
});
