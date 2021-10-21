import React from "react";
import { shallow } from "enzyme";
import { GiftsReceivedContainer } from "./GiftsReceivedContainer";

describe("Gift Received Container ", () => {
  const userDetails = {
    id: 1,
    first_name: "Sebastian",
    last_name: "Eschweiler",
    email: "sebastian@gmail.com",
    balance_points: 5000,
  };
  const props = {
    isLoggedIn: true,
    receivedCards: [],
    user: userDetails,
    fetchReceivedCards: jest.fn(),
    redeemCard: jest.fn(),
  };
  it("shoiuld render", () => {
    const wrapper = shallow(<GiftsReceivedContainer />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should call componentDidMount method", () => {
    const wrapper = shallow(<GiftsReceivedContainer {...props} />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, "componentDidMount");
    instance.forceUpdate();
    instance.componentDidMount();
    expect(spy).toHaveBeenCalled();
  });

  it("should call componentDidCatch method", () => {
    const wrapper1 = shallow(<GiftsReceivedContainer {...props} />);
    const instance = wrapper1.instance();
    const spy = jest.spyOn(instance, "componentDidCatch");
    instance.forceUpdate();
    instance.componentDidCatch();
    expect(spy).toHaveBeenCalled();
  });

  it("should call handleRedeemCard  method", () => {
    const props2 = {
      isLoggedIn: false,
      receivedCards: [],
      user: userDetails,
      fetchReceivedCards: jest.fn(),
      redeemCard: jest.fn(),
    };
    const wrapper1 = shallow(<GiftsReceivedContainer {...props2} />);
    const instance = wrapper1.instance();
    const data = {
      id: 1,
      senderEmail: "test@test.com",
      receiverEmail: "test@test.com",
      cardName: "test card",
      cardPoints: 123,
      cardShortDesc: "test short desc",
      cardImage: "test url",
      cardIssueDate: "23-05-2020",
      cardExpiryDate: "23-05-2022",
      isRedeemed: false,
    };
    const spy = jest.spyOn(instance, "handleRedeemCard");
    instance.handleRedeemCard(data);
    expect(spy).toHaveBeenCalled();
  });
  it("should call else  receivedCards card", () => {
    const props2 = {
      isLoggedIn: true,
      user: userDetails,
      fetchReceivedCards: jest.fn(),
      receivedCards: [{ id: 1 }, { id: 2 }],
    };
    const wrapper1 = shallow(<GiftsReceivedContainer {...props2} />);
    expect(wrapper1.find("CircularProgress").length).toBe(0);
  });

  it("should call if  receivedCards card", () => {
    const props2 = {
      isLoggedIn: true,
      user: userDetails,
      fetchReceivedCards: jest.fn(),
    };
    const wrapper1 = shallow(<GiftsReceivedContainer {...props2} />);
    expect(wrapper1.find("CircularProgress").length).toBe(0);
  });
});
