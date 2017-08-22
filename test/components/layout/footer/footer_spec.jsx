import React from 'react';
import assert from 'power-assert';
import Footer from 'components/layout/footer/footer';
import FooterStyle from 'components/layout/footer/style';
import { shallow } from 'enzyme';

describe('<Footer>', () => {
  it('class is assingd defalut', () => {
    const layoutFooter = shallow(<Footer />);
    assert(FooterStyle !== undefined);
    assert(layoutFooter !== undefined);
  });
});
