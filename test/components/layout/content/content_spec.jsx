import React from 'react';
import assert from 'power-assert';
import Content from 'components/content/content';
import ContentStyle from 'components/content/style';
import { shallow } from 'enzyme';

describe('<Content>', () => {
  it('class is assingd defalut', () => {
    const layoutContent = shallow(<Content />);
    assert(ContentStyle !== undefined);
    assert(layoutContent !== undefined);
  });
});
