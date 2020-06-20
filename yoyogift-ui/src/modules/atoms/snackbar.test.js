import React from "react";
import { shallow } from "enzyme";
import MySnackbar from "./Snackbar";

describe("Snackbar", () => {
  it("should be defined", () => {
    expect(MySnackbar).toBeDefined();
  });
  it("should render Snackbar", () => {
    const component = shallow(<MySnackbar />);
    expect(component).toMatchSnapshot();
  });
});
