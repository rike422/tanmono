import React from 'react';
import assert from 'power-assert';
import Label from 'components/label/label';
import LabelStyle from 'components/label/style';
import { shallow } from 'enzyme';

describe('<Label>', () => {
  it('class is assingd defalut', () => {
    const formFieldLabel = shallow(<Label />);
    assert(LabelStyle !== undefined);
    assert(formFieldLabel !== undefined);
  });
});
