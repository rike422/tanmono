import React from 'react';
import assert from 'power-assert';
import Col from 'components/col/col';
import ColStyle from 'components/col/style';
import { shallow } from 'enzyme';

const GRID_COLUMNS = 12;

const range = [...Array(GRID_COLUMNS).keys()].slice(1);

describe('<Col>', () => {

  it('class is assingd defalut', () => {
    const col = shallow(<Col />);
    assert(ColStyle !== undefined);
    assert(col !== undefined);
  });

  describe('Proptypes', () => {

    range.forEach((i) => {
      describe(`xs = ${i}`, () => {
        const xsColClass = `col-xs-${i}`;
        it(`should be "${xsColClass}" included in class`, () => {
          const col = shallow(<Col xs={i} />);
          assert(col.hasClass(ColStyle[xsColClass]));
        });
      });

      describe(`sm = ${i}`, () => {
        const smColClass = `col-sm-${i}`;
        it(`should be "${smColClass}" included in class`, () => {
          const col = shallow(<Col sm={i} />);
          assert(col.hasClass(ColStyle[smColClass]));
        });
      });

      describe(`md = ${i}`, () => {
        const mdColClass = `col-md-${i}`;
        it(`should be "${mdColClass}" included in class`, () => {
          const col = shallow(<Col md={i} />);
          assert(col.hasClass(ColStyle[mdColClass]));
        });
      });

      describe(`lg = ${i}`, () => {
        const lgColClass = `col-lg-${i}`;
        it(`should be "${lgColClass}" included in class`, () => {
          const col = shallow(<Col lg={i} />);
          assert(col.hasClass(ColStyle[lgColClass]));
        });
      });

      describe(`xsOffset = ${i}`, () => {
        const xsOffsetClass = `col-xs-offset-${i}`;
        it(`should be "${xsOffsetClass}" included in class`, () => {
          const col = shallow(<Col xsOffset={i} />);
          assert(col.hasClass(ColStyle[xsOffsetClass]));
        });
      });

      describe(`smOffset = ${i}`, () => {
        const smOffsetClass = `col-sm-offset-${i}`;
        it(`should be "${smOffsetClass}" included in class`, () => {
          const col = shallow(<Col smOffset={i} />);
          assert(col.hasClass(ColStyle[smOffsetClass]));
        });
      });

      describe(`mdOffset = ${i}`, () => {
        const mdOffsetClass = `col-md-offset-${i}`;
        it(`should be "${mdOffsetClass}" included in class`, () => {
          const col = shallow(<Col mdOffset={i} />);
          assert(col.hasClass(ColStyle[mdOffsetClass]));
        });
      });

      describe(`lgOffset = ${i}`, () => {
        const lgOffsetClass = `col-lg-offset-${i}`;
        it(`should be "${lgOffsetClass}" included in class`, () => {
          const col = shallow(<Col lgOffset={i} />);
          assert(col.hasClass(ColStyle[lgOffsetClass]));
        });
      });

      describe('responsive', () => {
        const smColClass = `col-sm-${i}`;
        const xsColClass = `col-xs-${i}`;
        const mdColClass = `col-md-${i}`;
        const lgColClass = `col-lg-${i}`;
        it('should be multiple class included in class', () => {
          const col = shallow(<Col xs={i} sm={i} md={i} lg={i} />);
          assert(col.hasClass(ColStyle[smColClass]));
          assert(col.hasClass(ColStyle[xsColClass]));
          assert(col.hasClass(ColStyle[mdColClass]));
          assert(col.hasClass(ColStyle[lgColClass]));
        });
      });
    });
  });
});
