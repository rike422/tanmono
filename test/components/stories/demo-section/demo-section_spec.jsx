import React from 'react';
import assert from 'power-assert';
import DemoSection from 'components/demo-section/demo-section';
import DemoSectionStyle from 'components/demo-section/style';
import { shallow } from 'enzyme';

describe('<DemoSection>', () => {
  it('class is assingd defalut', () => {
    const storiesDemoSection = shallow(<DemoSection />);
    assert(DemoSectionStyle !== undefined);
    assert(storiesDemoSection !== undefined);
  });
});
