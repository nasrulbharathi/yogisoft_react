import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";
import renderer from "react-test-renderer";

describe("Footer", () => {
  let mountedFooter;
  beforeEach(() => {
    mountedFooter = shallow(<Footer />);
  });
  it("should be defined", () => {
    expect(Footer).toBeDefined();
  });
  it("should render Footer", () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
