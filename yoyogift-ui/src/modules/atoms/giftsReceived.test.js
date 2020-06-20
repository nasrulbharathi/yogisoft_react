import React from "react";
import { shallow, mount } from "enzyme";
import { GiftsReceived } from "./giftsReceived";
import { Button } from "@material-ui/core";

describe("Gift Received ", () => {
  it("should be rendered", () => {
    const dataValue = [
      {
        cardName: "testcard",
        cardPoints: 123,
        senderEmail: "test@test.com",
        cardShortDesc: "test card",
        cardIssueDate:
          "Mon May 04 2020 14:51:28 GMT+0530 (India Standard Time)",
        cardExpiryDate:
          "Mon Aug 04 2020 14:51:28 GMT+0530 (India Standard Time)",
        isRedeemed: false,
      },
    ];
    let p = {
      classes: {},
      data: dataValue,
    };
    const wrapper = shallow(<GiftsReceived {...p} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render Redeemed", () => {
    const dataValue2 = [
      {
        cardName: "testcard",
        cardPoints: 123,
        senderEmail: "test@test.com",
        cardShortDesc: "test card",
        cardIssueDate:
          "Mon May 04 2020 14:51:28 GMT+0530 (India Standard Time)",
        cardExpiryDate:
          "Mon Aug 04 2020 14:51:28 GMT+0530 (India Standard Time)",
        isRedeemed: true,
      },
    ];
    let p2 = {
      classes: {},
      data: dataValue2,
    };
    const wrapper = shallow(<GiftsReceived {...p2} />);
    expect(wrapper.find("#redeemed").length).toBe(1);
  });
  it("should click Redeem Card", () => {
    const dataValue2 = [
      {
        cardName: "testcard",
        cardPoints: 123,
        senderEmail: "test@test.com",
        cardShortDesc: "test card",
        cardIssueDate:
          "Mon May 04 2020 14:51:28 GMT+0530 (India Standard Time)",
        cardExpiryDate:
          "Mon Aug 04 2020 14:51:28 GMT+0530 (India Standard Time)",
        isRedeemed: false,
      },
    ];
    let props = {
      classes: {
        root: {
          minHeight: "100vh",
          width: "100%",
          overflowX: "auto",
        },
        table: {
          minWidth: 700,
        },
      },
      data: dataValue2,
      redeemCard: jest.fn(),
    };
    const wrapper = mount(<GiftsReceived {...props} />);
    wrapper.find("Button").simulate("click");
    expect(props.redeemCard).toHaveBeenCalledTimes(1);
  });
});
