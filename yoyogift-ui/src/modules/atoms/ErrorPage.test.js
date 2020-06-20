import React from "react";
import { shallow } from "enzyme";
import ErrorPage from "./ErrorPage";

describe("Error Page", () => {
  it("should be defined", () => {
    expect(ErrorPage).toBeDefined();
  });
  it("should render ErrorPage", () => {
    const component = shallow(<ErrorPage />);
    expect(component).toMatchSnapshot();
  });
});
