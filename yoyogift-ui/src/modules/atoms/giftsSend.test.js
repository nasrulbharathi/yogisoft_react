import React from "react";
import { shallow } from "enzyme";
import { GiftsSend } from "./GiftsSend";

describe("Gifts Send ", () => {
  it("should be rendered", () => {
    const dataValue = [
      {
        cardName: "testcard",
        cardPoints: 123,
        receiverEmail: "test@test.com",
        cardIssueDate:
          "Mon May 04 2020 14:51:28 GMT+0530 (India Standard Time)",
        cardExpiryDate:
          "Mon Aug 04 2020 14:51:28 GMT+0530 (India Standard Time)",
      },
    ];
    let p = {
      classes: {},
      data: dataValue,
    };
    const wrapper = shallow(<GiftsSend {...p} />);
    expect(wrapper).toMatchSnapshot();
  });
});
