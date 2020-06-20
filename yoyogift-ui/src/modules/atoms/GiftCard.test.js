import React from "react";
import { shallow } from "enzyme";
import { GiftCard } from "./GiftCard";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

const getGiftCardData = {
  id: 1,
  cardName: "Amazon Gift ",
  cardPoints: 1200,
  cardCategory: "Ecommerce",
  cardRetailer: "Amazon",
  cardIssueDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
  cardExpiryDate: "2019-06-29T00:00:00.000Z",
  cardCount: 95,
  cardImage: "https://pngimg.com/uploads/amazon/amazon_PNG21.png",
  cardVendor: "amazon",
  cardShortDesc: "10% OFF",
  cardLongDesc:
    "Amazon Gift Cards are the Perfect Gift, Every Time. Use the eBay Gift Card to shop from millions of items in Electronics, Toys, Motors, Fashion, Home & Garden, Art, Collectibles, Sporting Goods and everything in-between. eBay Gift Cards never expire and have no fees. Use it to shop now or wait for the deal of a lifetime.",
  cardComments: [
    {
      id: 1,
      first_name: "Sebastian",
      last_name: "Eschweiler",
      email: "sebastian@mindtree.com",
      rating: 4,
      comment: "Great gift card. Happy to gift!",
      commented_on: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
    },
  ],
};

describe("Gift Card", () => {
  let mountedGiftCard;
  const classes = {};
  beforeEach(() => {
    mountedGiftCard = shallow(
      <GiftCard
        classes={{ classes }}
        isAdmin={true}
        giftCard={getGiftCardData}
      />
    );
  });
  it("should be defined", () => {
    expect(mountedGiftCard).toBeDefined();
  });
  it("should render shallow Gift Card", () => {
    expect(mountedGiftCard).toMatchSnapshot();
  });
  it("renders Gift card", () => {
    // const wrapper = renderGiftCard();
    const classes2 = {
      card: {
        maxWidth: 400,
        minWidth: 100,
        textAlign: "center",
      },
      media: {
        height: 0,
        flexShrink: 1,
        flexGrow: 1,
        paddingTop: "56.25%",
      },
      actions: {
        display: "flex",
      },
      expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: {},
      },
      expandOpen: {
        transform: "rotate(180deg)",
      },
      avatar: {
        backgroundColor: {},
      },
      fab: {
        height: "35px",
        width: "35px",
      },
    };

    const wrapper2 = shallow(
      <GiftCard giftCard={getGiftCardData} classes={classes2} />
    );
    wrapper2.setProps({
      classes: {},
      giftCard: getGiftCardData,
      isAdmin: false,
    });
    expect(wrapper2.find(Card).length).toBe(1);
    expect(wrapper2.find(CardHeader).length).toBe(1);
  });
  it("test handleExpandClick  with true", () => {
    const classes2 = {
      card: {
        maxWidth: 400,
        minWidth: 100,
        textAlign: "center",
      },
      media: {
        height: 0,
        flexShrink: 1,
        flexGrow: 1,
        paddingTop: "56.25%",
      },
      actions: {
        display: "flex",
      },
      expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: {},
      },
      expandOpen: {
        transform: "rotate(180deg)",
      },
      avatar: {
        backgroundColor: {},
      },
      fab: {
        height: "35px",
        width: "35px",
      },
    };
    const wrapper2 = shallow(
      <GiftCard giftCard={getGiftCardData} classes={classes2} />
    );

    const instance = wrapper2.instance();
    wrapper2.setState({ expanded: true }, () => {
      wrapper2.update();
      instance.handleExpandClick();
      expect(wrapper2.state().expanded).toEqual(false);
    });
  });
});
