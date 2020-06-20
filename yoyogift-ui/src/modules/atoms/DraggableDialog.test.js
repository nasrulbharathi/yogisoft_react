import React from "react";
import { shallow } from "enzyme";
import DraggableDialog from "./DraggableDialog";
test("should render DraggableDialog", () => {
  const wrapper = shallow(<DraggableDialog />);
  expect(wrapper).toMatchSnapshot();
});

describe("Test DraggableDialog function ", () => {
  it("testing handleOpenClose cardvalue", () => {
    const wrapper = shallow(<DraggableDialog />);
    const instance = wrapper.instance();
    instance.handleOpenClose();
    expect(wrapper.state().open).toEqual(true);
  });
  it("testing handleSendAndClose cardvalue", () => {
    let prop = {
      getEmail() {},
    };
    const wrapper = shallow(<DraggableDialog {...prop} />);
    const instance = wrapper.instance();
    instance.handleSendAndClose("handleSendAndClose");
    expect(wrapper.state().open).toEqual(false);
  });
});
