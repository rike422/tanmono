import React from 'react';
import assert from 'power-assert';
import FormField from 'components/form-field/form-field';
import FormFieldStyle from 'components/form-field/style';
import { shallow } from 'enzyme';

describe('<FormField>', () => {
  it('class is assingd defalut', () => {
    const formField = shallow(<FormField />);
    assert(FormFieldStyle !== undefined);
    assert(formField !== undefined);
  });
});
