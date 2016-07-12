import React from 'react';
import assert from 'power-assert';
import Highlighter from 'components/highlighter/highlighter';
import HighlighterStyle from 'components/highlighter/style';
import { shallow } from 'enzyme';

describe('<Highlighter>', () => {
  it('class is assingd defalut', () => {
    const storiesHighlighter = shallow(<Highlighter />);
    assert(HighlighterStyle !== undefined);
    assert(storiesHighlighter !== undefined);
  });
});
