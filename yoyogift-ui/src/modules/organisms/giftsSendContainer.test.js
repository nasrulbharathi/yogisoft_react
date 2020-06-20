import React from "react";
import { shallow } from "enzyme";
import { GiftsSendContainer } from "./GiftsSendContainer";

describe("Gift Send Container ", () => {
  const userDetails = {
    id: 1,
    first_name: "Sebastian",
    last_name: "Eschweiler",
    email: "sebastian@mindtree.com",
    balance_points: 5000,
  };
  const props = {
    isLoggedIn: true,
    sentCards: [],
    user: userDetails,
    fetchSentCards: jest.fn(),
  };
  it("shoiuld render", () => {
    const wrapper = shallow(<GiftsSendContainer />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should call componentDidMount method", () => {
    const wrapper = shallow(<GiftsSendContainer {...props} />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, "componentDidMount");
    instance.forceUpdate();
    instance.componentDidMount();
    expect(spy).toHaveBeenCalled();
  });

  it("should call componentDidCatch method", () => {
    const wrapper1 = shallow(<GiftsSendContainer {...props} />);
    const instance = wrapper1.instance();
    const spy = jest.spyOn(instance, "componentDidCatch");
    instance.forceUpdate();
    instance.componentDidCatch();
    expect(spy).toHaveBeenCalled();
  });

  it("should call else  sent card", () => {
    const props2 = {
      isLoggedIn: true,
      user: userDetails,
      fetchSentCards: jest.fn(),
      sentCards: [{ id: 1 }, { id: 2 }],
    };
    const wrapper1 = shallow(<GiftsSendContainer {...props2} />);
    expect(wrapper1.find("CircularProgress").length).toBe(0);
  });

  it("should call if  sent card", () => {
    const props2 = {
      isLoggedIn: true,
      user: userDetails,
      fetchSentCards: jest.fn(),
    };
    const wrapper1 = shallow(<GiftsSendContainer {...props2} />);
    expect(wrapper1.find("CircularProgress").length).toBe(0);
  });
});
