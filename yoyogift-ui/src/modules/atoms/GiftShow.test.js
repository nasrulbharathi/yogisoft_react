import React from "react";
import { shallow, mount } from "enzyme";
import GiftShow from "./GiftShow";
import renderer from "react-test-renderer";
import SendGiftCardDialog from "./DraggableDialog";

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
      email: "sebastian@gmail.com",
      rating: 4,
      comment: "Great gift card. Happy to gift!",
      commented_on: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
    },
  ],
};

describe("Gift Show", () => {
  let mountedGiftShow;
  beforeEach(() => {
    mountedGiftShow = mount(<GiftShow data={getGiftCardData} />);
  });
  it("should be defined", () => {
    expect(GiftShow).toBeDefined();
  });
  it("should render Gift Card", () => {
    const tree = renderer.create(<GiftShow data={getGiftCardData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Star Rating compoent is present or not", () => {
    const wrap = shallow(<GiftShow data={getGiftCardData} />);
    const locators = wrap.find("StarRatingComponent");
    expect(locators.length).toBe(1);
  });

  it("Loading user revier", () => {
    // const wrap = shallow(<GiftShow data={getGiftCardData} />);
    const giftCardDataWithout = {
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
    };
    const wrap = mount(<GiftShow data={giftCardDataWithout} />);
    const locators = wrap.find(".loading_user_review");
    expect(locators.length).toBe(1);
  });
});
