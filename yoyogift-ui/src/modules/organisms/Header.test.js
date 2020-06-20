import React from "react";
import { shallow } from "enzyme";
import { Header } from "./Header";

describe("Header Container ", () => {
  const props = {
    classes: {},
    isLoggedIn: false,
    logout: jest.fn(),
  };
  it("should be defined", () => {
    expect(Header).toBeDefined();
  });
  it("should render Header", () => {
    const component = shallow(<Header {...props} />);
    expect(component).toMatchSnapshot();
  });
  it("should call handle goTolanding method", () => {
    const wrapper1 = shallow(<Header {...props} />);
    const instance = wrapper1.instance();
    const spy = jest.spyOn(instance, "goTolanding");
    instance.goTolanding();
    expect(spy).toHaveBeenCalled();
  });
  it("should call handle myProfile method", () => {
    const wrapper1 = shallow(<Header {...props} />);
    const instance = wrapper1.instance();
    const spy = jest.spyOn(instance, "myProfile");
    instance.myProfile();
    expect(spy).toHaveBeenCalled();
  });
  it("should call handle giftsSend method", () => {
    const wrapper1 = shallow(<Header {...props} />);
    const instance = wrapper1.instance();
    const spy = jest.spyOn(instance, "giftsSend");
    instance.giftsSend();
    expect(spy).toHaveBeenCalled();
  });
  it("should call handle giftsReceived method", () => {
    const wrapper1 = shallow(<Header {...props} />);
    const instance = wrapper1.instance();
    const spy = jest.spyOn(instance, "giftsReceived");
    instance.giftsReceived();
    expect(spy).toHaveBeenCalled();
  });
  it("should call handle logInOut method", () => {
    const wrapper1 = shallow(<Header {...props} />);
    const instance = wrapper1.instance();
    const spy = jest.spyOn(instance, "logInOut");
    instance.logInOut();
    expect(spy).toHaveBeenCalled();
  });
  it("should call handle logInOut else method and is isAdmin true", () => {
    const props2 = {
      classes: {},
      isLoggedIn: true,
      logout: jest.fn(),
      userDetails: {
        isAdmin: true,
      },
    };
    const wrapper1 = shallow(<Header {...props2} />);
    const instance = wrapper1.instance();
    const spy = jest.spyOn(instance, "logInOut");
    instance.logInOut();
    expect(spy).toHaveBeenCalled();
  });
  it("should call handle showAllUsers method", () => {
    const wrapper1 = shallow(<Header {...props} />);
    const instance = wrapper1.instance();
    const spy = jest.spyOn(instance, "showAllUsers");
    instance.showAllUsers();
    expect(spy).toHaveBeenCalled();
  });
  it("should call handle logOut method", () => {
    const wrapper1 = shallow(<Header {...props} />);
    const instance = wrapper1.instance();
    const spy = jest.spyOn(instance, "logOut");
    instance.logOut();
    expect(spy).toHaveBeenCalled();
  });
});
