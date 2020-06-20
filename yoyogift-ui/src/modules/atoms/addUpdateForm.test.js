import React from "react";
import { shallow } from "enzyme";

import { AddUpdateForm } from "./addUpdateForm";

describe("Admin Form testing ", () => {
  const props = {
    giftCards: [
      {
        id: 0,
        cardName: "Game Card",
        cardPoints: "200",
        cardCategory: "Sport",
        cardRetailer: "decathlon",
        cardIssueDate: "MOn May 4 2020 12:43:25 GMT+0530 (India Standard Time)",
        cardExpiryDate: "2021-03-31T00:00:00.000Z",
        cardCount: 20,
        cardImage:
          "data:image/png;base64,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",
        cardVendor: "decathlon",
        cardShortDesc: "20% OFF",
        cardLongDesc: "This is a gift card",
        cardComments: [
          {
            id: 0,
            first_name: "Kuldeep",
            last_name: "Gupta",
            email: "Kuldeep@gmail.com",
            rating: 4,
            comment: "Happy to gift",
            commented_on:
              "MOn May 4 2020 12:43:25 GMT+0530 (India Standard Time)",
          },
        ],
      },
    ],
    match: {
      params: {
        id: 1,
      },
    },
    adminAddCard() {},
  };

  it("should call componentDidMount method", () => {
    const tempProps = {
      giftCards: [
        {
          id: 0,
          cardName: "Game Card",
          cardPoints: "200",
          cardCategory: "Sport",
          cardRetailer: "decathlon",
          cardIssueDate:
            "MOn May 4 2020 12:43:25 GMT+0530 (India Standard Time)",
          cardExpiryDate: "2021-03-31T00:00:00.000Z",
          cardCount: 20,
          cardImage:
            "data:image/png;base64,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",
          cardVendor: "decathlon",
          cardShortDesc: "20% OFF",
          cardLongDesc: "This is a gift card",
          cardComments: [
            {
              id: 0,
              first_name: "Kuldeep",
              last_name: "Gupta",
              email: "Kuldeep@gmail.com",
              rating: 4,
              comment: "Happy to gift",
              commented_on:
                "MOn May 4 2020 12:43:25 GMT+0530 (India Standard Time)",
            },
          ],
        },
      ],
      match: {
        params: {
          id: 0,
        },
      },
      adminAddCard() {},
    };
    const wrapper = shallow(<AddUpdateForm {...tempProps} />);
    const instance = wrapper.instance();
    instance.forceUpdate();
    instance.componentDidMount();
    expect(instance.currentGiftCard.cardName).toEqual("Game Card");
  });

  it("testing clearInput ", () => {
    const wrapper = shallow(<AddUpdateForm {...props} />);
    const instance = wrapper.instance();
    instance.clearInput();
    expect(instance.state.cardNameValue).toEqual("");
  });

  it("testing handlecardname cardvalue", () => {
    const wrapper = shallow(<AddUpdateForm {...props} />);
    const instance = wrapper.instance();
    const data = {
      target: {
        value: 12,
      },
    };
    instance.handleCardPointsChange(data);
    expect(wrapper.state().cardPointsValue).toEqual(12);
  });

  it("test handleCardPointsChange Error ", () => {
    const wrapper = shallow(<AddUpdateForm {...props} />);
    const instance = wrapper.instance();
    const data = {
      target: {
        value: "3a",
      },
    };
    instance.handleCardPointsChange(data);
    expect(wrapper.state().cardPointsError).toEqual(true);
  });

  it("testing handlecardname cardvalue", () => {
    const wrapper = shallow(<AddUpdateForm {...props} />);
    const instance = wrapper.instance();
    const data = {
      target: {
        value: "handlecardname",
      },
    };
    instance.handleCardNameChange(data);
    expect(wrapper.state().cardNameValue).toEqual("handlecardname");
  });
  it("testing handlecardname cardvalue 2nd", () => {
    const wrapper = shallow(<AddUpdateForm {...props} />);
    const instance = wrapper.instance();
    const data = {
      target: {
        value: "handlecardnamea",
      },
    };
    instance.handleCardNameChange(data);
    expect(wrapper.state().cardNameValue).toEqual("handlecardnamea");
  });

  it("testing handlecardname cardvalue with error", () => {
    const wrapper = shallow(<AddUpdateForm {...props} />);
    const instance = wrapper.instance();
    const data = {
      target: {
        value: "Hello World#123",
      },
    };
    instance.handleCardNameChange(data);
    expect(wrapper.state().cardNameError).toEqual(true);
  });

  it("test handleCardCategoryChange true", () => {
    const wrapper = shallow(<AddUpdateForm {...props} />);
    const instance = wrapper.instance();
    const data = {
      target: {
        value: "Cricket",
      },
    };
    instance.handleCardCategoryChange(data);
    expect(wrapper.state().cardCategoryValue).toEqual("Cricket");
  });

  it("test handleCardCategoryChange false", () => {
    const wrapper = shallow(<AddUpdateForm {...props} />);
    const instance = wrapper.instance();
    const data = {
      target: {
        value: "",
      },
    };
    instance.handleCardCategoryChange(data);
    expect(wrapper.state().cardCategoryError).toEqual(true);
  });

  it("test handleCardRetailerChange", () => {
    const wrapper = shallow(<AddUpdateForm {...props} />);
    const instance = wrapper.instance();
    const data = {
      target: {
        value: "Flipkart",
      },
    };
    instance.handleCardRetailerChange(data);
    expect(wrapper.state().cardRetailerValue).toEqual("Flipkart");
  });

  it("test handleCardRetailerChange negative ", () => {
    const wrapper = shallow(<AddUpdateForm {...props} />);
    const instance = wrapper.instance();
    const data = {
      target: {
        value: "",
      },
    };
    instance.handleCardRetailerChange(data);
    expect(wrapper.state().cardRetailerError).toEqual(true);
  });

  it("test handleCardExpiryDateChange false", () => {
    const wrapper = shallow(<AddUpdateForm {...props} />);
    const instance = wrapper.instance();
    const data = {
      target: {
        value: "2020-05-05",
      },
    };
    instance.handleCardExpiryDateChange(data);
    expect(wrapper.state().cardExpiryDateError).toEqual(true);
  });

  it("test handleCardExpiryDateChange true", () => {
    const wrapper = shallow(<AddUpdateForm {...props} />);
    const instance = wrapper.instance();
    const data = {
      target: {
        value: "2021-03-31T00:00:00.000Z",
      },
    };
    instance.handleCardExpiryDateChange(data);
    expect(wrapper.state().cardExpiryDateError).toEqual(false);
  });

  it("test handleCardCountChange with true", () => {
    const wrapper = shallow(<AddUpdateForm {...props} />);
    const instance = wrapper.instance();
    const data = {
      target: {
        value: 1,
      },
    };
    instance.handleCardCountChange(data);
    expect(wrapper.state().cardCountError).toEqual(false);
  });

  it("test handleCardCountChange with false ", () => {
    const wrapper = shallow(<AddUpdateForm {...props} />);
    const instance = wrapper.instance();
    const data = {
      target: {
        value: "12a",
      },
    };
    instance.handleCardCountChange(data);
    expect(wrapper.state().cardCountError).toEqual(true);
  });

  it("test handleCardImageChange", () => {
    const wrapper = shallow(<AddUpdateForm {...props} />);
    const instance = wrapper.instance();
    const data = {
      target: {
        value:
          "https://images.outlookindia.com/public/uploads/articles/2019/4/18/cover_story_10_20190429_571_855.jpg",
      },
    };
    instance.handleCardImageChange(data);
    expect(wrapper.state().cardImageError).toEqual(false);
  });

  it("test handleCardImageChange with false ", () => {
    const wrapper = shallow(<AddUpdateForm {...props} />);
    const instance = wrapper.instance();
    const data = {
      target: {
        value: "12a",
      },
    };
    instance.handleCardImageChange(data);
    expect(wrapper.state().cardImageError).toEqual(true);
  });

  it("test handleCardVendorChange with true", () => {
    const wrapper = shallow(<AddUpdateForm {...props} />);
    const instance = wrapper.instance();
    const data = {
      target: {
        value: "xyz",
      },
    };
    instance.handleCardVendorChange(data);
    expect(wrapper.state().cardVendorError).toEqual(false);
  });

  it("test handleCardVendorChange negative ", () => {
    const wrapper = shallow(<AddUpdateForm {...props} />);
    const instance = wrapper.instance();
    const data = {
      target: {
        value: "Amazon!@",
      },
    };
    instance.handleCardVendorChange(data);
    expect(wrapper.state().cardVendorError).toEqual(true);
  });

  it("test handleCardShortDescChange", () => {
    const wrapper = shallow(<AddUpdateForm {...props} />);
    const instance = wrapper.instance();
    const data = {
      target: {
        value: "zyx",
      },
    };
    instance.handleCardShortDescChange(data);
    expect(wrapper.state().cardShortDescError).toEqual(false);
  });

  it("test handleCardShortDescChange negative ", () => {
    const wrapper = shallow(<AddUpdateForm {...props} />);
    const instance = wrapper.instance();
    const data = {
      target: {
        value: "",
      },
    };
    instance.handleCardShortDescChange(data);
    expect(wrapper.state().cardShortDescError).toEqual(true);
  });

  it("test handleCardLongDescChange", () => {
    const wrapper = shallow(<AddUpdateForm {...props} />);
    const instance = wrapper.instance();
    const data = {
      target: {
        value: "xyz",
      },
    };
    instance.handleCardLongDescChange(data);
    expect(wrapper.state().cardLongDescError).toEqual(false);
  });

  it("test handleCardLongDescChange negative ", () => {
    const wrapper = shallow(<AddUpdateForm {...props} />);
    const instance = wrapper.instance();
    const data = {
      target: {
        value: "",
      },
    };
    instance.handleCardLongDescChange(data);
    expect(wrapper.state().cardLongDescError).toEqual(true);
  });

  it("test addUpdateCard  ", () => {
    const wrapper = shallow(<AddUpdateForm {...props} />);
    const instance = wrapper.instance();

    instance.addUpdateCard();
    expect(wrapper.state().showErrorSnackBar).toEqual(true);
  });
  it("test addUpdateCard  ", () => {
    const wrapper = shallow(<AddUpdateForm {...props} />);
    const instance = wrapper.instance();

    instance.addUpdateCard();
    expect(wrapper.state().showErrorSnackBar).toEqual(true);
  });
});
