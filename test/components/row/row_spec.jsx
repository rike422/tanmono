import React from 'react';
import assert from 'power-assert';
import Row from 'components/row/row';
import RowStyle from 'components/row/style';
import { shallow } from 'enzyme';

const MODIFIER_TYPE = ['xs', 'sm', 'md', 'lg'];
describe('<Row>', () => {
  it('class is assingd defalut', () => {
    const row = shallow(<Row />);
    assert(RowStyle !== undefined);
    assert(row !== undefined);
  });

  it('should render an value set in the tagName', () => {
    const grid = shallow(<Row tagName={'section'} />);
    assert(grid.is('section'), true);
  });

  context('propTypes.revers', () => {
    it('should be "reverse" included in class', () => {
      const row = shallow(<Row reverse />);
      assert(row.hasClass(RowStyle.reverse));
    });
  });

  MODIFIER_TYPE.forEach((type) => {
    context(`propTypes.start = ${type}`, () => {
      it(`should be "start-${type}" included in class`, () => {
        const row = shallow(<Row start={type} />);
        assert(row.hasClass(RowStyle[`start-${type}`]));
      });
    });

    context(`propTypes.center = ${type}`, () => {
      it(`should be "center-${type}" included in class`, () => {
        const row = shallow(<Row center={type} />);
        assert(row.hasClass(RowStyle[`center-${type}`]));
      });
    });

    context(`propTypes.end = ${type}`, () => {
      it(`should be "end-${type}" included in class`, () => {
        const row = shallow(<Row end={type} />);
        assert(row.hasClass(RowStyle[`end-${type}`]));
      });
    });
    context(`propTypes.top = ${type}`, () => {
      it(`should be "top-${type}" included in class`, () => {
        const row = shallow(<Row top={type} />);
        assert(row.hasClass(RowStyle[`top-${type}`]));
      });
    });
    context(`propTypes.top = ${type}`, () => {
      it(`should be "top-${type}" included in class`, () => {
        const row = shallow(<Row top={type} />);
        assert(row.hasClass(RowStyle[`top-${type}`]));
      });
    });
    context(`propTypes.middle = ${type}`, () => {
      it(`should be "middle-${type}" included in class`, () => {
        const row = shallow(<Row middle={type} />);
        assert(row.hasClass(RowStyle[`middle-${type}`]));
      });
    });
    context(`propTypes.bottom = ${type}`, () => {
      it(`should be "bottom-${type}" included in class`, () => {
        const row = shallow(<Row bottom={type} />);
        assert(row.hasClass(RowStyle[`bottom-${type}`]));
      });
    });
    context(`propTypes.around = ${type}`, () => {
      it(`should be "around-${type}" included in class`, () => {
        const row = shallow(<Row around={type} />);
        assert(row.hasClass(RowStyle[`around-${type}`]));
      });
    });
    context(`propTypes.between = ${type}`, () => {
      it(`should be "between-${type}" included in class`, () => {
        const row = shallow(<Row between={type} />);
        assert(row.hasClass(RowStyle[`between-${type}`]));
      });
    });
    context(`propTypes.first = ${type}`, () => {
      it(`should be "first-${type}" included in class`, () => {
        const row = shallow(<Row first={type} />);
        assert(row.hasClass(RowStyle[`first-${type}`]));
      });
    });
    context(`propTypes.last = ${type}`, () => {
      it(`should be "last-${type}" included in class`, () => {
        const row = shallow(<Row last={type} />);
        assert(row.hasClass(RowStyle[`last-${type}`]));
      });
    });
  });
});
