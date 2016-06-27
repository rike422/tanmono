import React from 'react';
import assert from 'power-assert';
import Grid from 'components/grid/grid';
import GridStyle from 'components/grid/style';
import { shallow } from 'enzyme';

describe('<Grid>', () => {
  it('default style', () => {
    const grid = shallow(<Grid />);
    assert(!grid.hasClass(GridStyle['container-fluid']));
    assert(grid.is('div'), true);
  });

  context('fluid is true', () => {
    it('should be "container-fluid" included in class', () => {
      const grid = shallow(<Grid fluid />);
      assert(grid.hasClass(GridStyle['container-fluid']));
    });
  });

  it('should render an value set in the tagName', () => {
    const grid = shallow(<Grid fluid tagName={'section'} />);
    assert(grid.is('section'), true);
  });
});
