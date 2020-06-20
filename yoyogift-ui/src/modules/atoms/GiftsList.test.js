import React from "react";
import { shallow } from "enzyme";
import { GiftsList } from "./GiftsList";

describe("Gifts List ", () => {
  const giftCardsFilteredValue = [
    {
      cardName: "testcard",
      cardPoints: 123,
      receiverEmail: "test@test.com",
      cardIssueDate: "Mon May 04 2020 14:51:28 GMT+0530 (India Standard Time)",
      cardExpiryDate: "Mon Aug 04 2020 14:51:28 GMT+0530 (India Standard Time)",
    },
  ];
  let p = {
    classes: {},
    giftCardsFiltered: giftCardsFilteredValue,
    userDetails: {
      isAdmin: true,
    },
  };
  it("should be rendered", () => {
    const wrapper = shallow(<GiftsList {...p} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should Invoke handleChangePage", () => {
    const wrapper = shallow(<GiftsList {...p} />);
    const instance = wrapper.instance();
    const event = {
      target: {
        value: 5,
      },
    };
    instance.handleChangePage(event, 5);
    expect(instance.state.page).toBe(5);
  });
  it("should Invoke handleChangeRowsPerPage", () => {
    const wrapper = shallow(<GiftsList {...p} />);
    const instance = wrapper.instance();
    const event = {
      target: {
        value: 5,
      },
    };
    instance.handleChangeRowsPerPage(event);
    expect(instance.state.rowsPerPage).toBe(5);
  });
});
