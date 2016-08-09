import React from 'react';
import assert from 'power-assert';
import Form from 'components/form/form';
import FormStyle from 'components/form/style';
import { shallow } from 'enzyme';

describe('<Form>', () => {
  it('class is assingd defalut', () => {
    const form = shallow(<Form />);
    assert(FormStyle !== undefined);
    assert(form !== undefined);
  });
});
