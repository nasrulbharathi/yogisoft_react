import React from "react";
import { shallow } from "enzyme";
import Profile from "./Profile";

describe("Profile", () => {
  it("should be defined", () => {
    expect(Profile).toBeDefined();
  });
  it("should render Profile", () => {
    const props = {
      detailsObject: {
        email: "nasrulrules@gmail.com",
        firstName: "nasrul",
        lastname: "bharathi",
        socialProfileLink: "http",
        picture: "http://img.png",
        balance_points: 200,
      },
    };
    const component = shallow(<Profile {...props} />);
    expect(component).toMatchSnapshot();
  });
});
