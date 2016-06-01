import React from "react";
import assert from "power-assert";
import Button from "components/button/button";
import buttonStyle from "components/button/style";
import { shallow } from "enzyme";

describe('<Button>', () => {
  it('class is assingd defalut', () => {
    const button = shallow(<Button></Button>);
    assert(button.hasClass(buttonStyle.default));
  });
});
