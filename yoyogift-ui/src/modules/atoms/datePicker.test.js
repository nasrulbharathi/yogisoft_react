import React from "react";
import { shallow } from "enzyme";
import { DatePickers } from "./datePicker";

describe("DatePickers ", () => {
  it("should be rendered", () => {
    let p = {
      classes: { container: "c" },
    };
    const wrapper = shallow(<DatePickers {...p} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should be defined", () => {
    expect(DatePickers).toBeDefined();
  });
  it("should render ", () => {
    const props = {
      classes: {},
    };
    const wrapper = shallow(<DatePickers {...props} />);
    expect(wrapper.find("form").length).toBe(1);
  });
});
