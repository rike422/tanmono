import React from 'react';
import assert from 'power-assert';
import FormInput from 'components/form-input/form-input';
import FormInputStyle from 'components/form-input/style';
import { shallow } from 'enzyme';

describe('<FormInput>', () => {
  it('class is assingd defalut', () => {
    const formInput = shallow(<FormInput />);
    assert(FormInputStyle !== undefined);
    assert(formInput !== undefined);
  });
});
