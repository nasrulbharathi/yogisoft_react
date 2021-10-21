import React from "react";
import { ProfileContainer } from "./profileContainers";
import Adapter from "enzyme-adapter-react-16";
import { mount, configure, shallow } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import mapStateToProps from "./profileContainers";
configure({ adapter: new Adapter() });

const userDetails = {
  id: 1,
  first_name: "Sebastian",
  last_name: "Eschweiler",
  email: "sebastian@gmail.com",
  balance_points: 5000,
  isAdmin: true,
};
const response = () => Promise.resolve("userDetails");
const error = { message: "some error" };
const errorResponse = () => Promise.reject(error);

describe("Profile Container_Component", () => {
  let wrapper;
  const props = {
    login: {
      id: 12,
      email: "test@test.com",
    },
    detailsObject: {
      id: 1,
    },
    user: userDetails,
    userDetails: jest.fn(() => response()),
    isLoggedIn: true,
  };
  it("should call insinde if method", () => {
    let wrapper = mount(<ProfileContainer {...props} />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance.props, "userDetails");
    // instance.componentDidMount();
    //expect(spy).toHaveBeenCalled();
    const tempProps = instance.props.userDetails;
    expect(tempProps).toHaveBeenCalledTimes(1);
  });
  it("should not call insinde if method", () => {
    const props2 = {
      login: {
        id: 12,
        email: "test@test.com",
      },
      user: userDetails,
      userDetails: jest.fn(() => response()),
      isLoggedIn: true,
    };
    let wrapper = mount(<ProfileContainer {...props2} />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance.props, "userDetails");
    const tempProps = instance.props.userDetails;
    expect(tempProps).toHaveBeenCalledTimes(0);
  });
  it("should call Profile when logged In", () => {
    const tempprops = {
      login: {
        id: 12,
        email: "test@test.com",
      },
      user: userDetails,
      userDetails: jest.fn(() => response()),
      isLoggedIn: true,
    };
    let wrapper2 = mount(<ProfileContainer {...tempprops} />);
    expect(wrapper2.find("Profile").length).toBe(1);
  });
  it("should not call Profile when is not Logged In", () => {
    // needs to be addressed
    const tempprops = {
      login: {
        id: 12,
        email: "test@test.com",
      },
      user: userDetails,
      userDetails: jest.fn(() => response()),
      isLoggedIn: false,
    };
    let wrapper3 = shallow(<ProfileContainer {...tempprops} />);
    expect(wrapper3.find("#profileredirect").length).toBe(1);
  });
});
