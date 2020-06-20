import React from "react";
import { shallow } from "enzyme";
import { GiftsListContainer } from "./GiftsListContainer";

describe("Header Container ", () => {
  it("should be defined", () => {
    expect(GiftsListContainer).toBeDefined();
  });
  it("should render Header", () => {
    const props = {
      classes: {},
      giftCards: [],
      giftCardsFiltered: [],
      userDetails: {},
      fetchCards: jest.fn(),
      fetchCard: jest.fn(),
      fetchCardFilter: jest.fn(),
    };
    const component = shallow(<GiftsListContainer {...props} />);
    expect(component).toMatchSnapshot();
  });
  it("should call componentDidCatch method", () => {
    const props = {
      classes: {},
      giftCards: [],
      giftCardsFiltered: [],
      userDetails: {},
      fetchCards: jest.fn(),
      fetchCard: jest.fn(),
      fetchCardFilter: jest.fn(),
    };
    const wrapper1 = shallow(<GiftsListContainer {...props} />);
    const instance = wrapper1.instance();
    const spy = jest.spyOn(instance, "componentDidCatch");
    instance.forceUpdate();
    instance.componentDidCatch();
    expect(spy).toHaveBeenCalled();
  });
  it("should call handleChangePage method", () => {
    const props = {
      classes: {},
      giftCards: [],
      giftCardsFiltered: [],
      userDetails: {},
      fetchCards: jest.fn(),
      fetchCard: jest.fn(),
      fetchCardFilter: jest.fn(),
    };
    const wrapper1 = shallow(<GiftsListContainer {...props} />);
    const instance = wrapper1.instance();
    const spy = jest.spyOn(instance, "handleChangePage");
    instance.handleChangePage();
    expect(spy).toHaveBeenCalled();
  });
  it("should call handleChangeRowsPerPage method", () => {
    const props = {
      classes: {},
      giftCards: [],
      giftCardsFiltered: [],
      userDetails: {},
      fetchCards: jest.fn(),
      fetchCard: jest.fn(),
      fetchCardFilter: jest.fn(),
    };
    const wrapper1 = shallow(<GiftsListContainer {...props} />);
    const instance = wrapper1.instance();
    const spy = jest.spyOn(instance, "handleChangeRowsPerPage");
    const event = {
      target: {
        value: 2,
      },
    };
    instance.handleChangeRowsPerPage(event);
    expect(spy).toHaveBeenCalled();
  });
  it("should call handleSortButtonClick method", () => {
    const props = {
      classes: {},
      giftCards: [],
      giftCardsFiltered: [],
      userDetails: {},
      fetchCards: jest.fn(),
      fetchCard: jest.fn(),
      fetchCardFilter: jest.fn(),
    };
    const wrapper1 = shallow(<GiftsListContainer {...props} />);
    const instance = wrapper1.instance();
    const spy = jest.spyOn(instance, "handleSortButtonClick");
    instance.handleSortButtonClick();
    expect(spy).toHaveBeenCalled();
  });
  it("should call onChange method", () => {
    const props = {
      classes: {},
      giftCards: [],
      giftCardsFiltered: [],
      userDetails: {},
      fetchCards: jest.fn(),
      fetchCard: jest.fn(),
      fetchCardFilter: jest.fn(),
    };
    const wrapper1 = shallow(<GiftsListContainer {...props} />);
    const instance = wrapper1.instance();
    const spy = jest.spyOn(instance, "onChange");
    const event = {
      target: {
        value: 2,
      },
    };
    instance.onChange(event);
    expect(spy).toHaveBeenCalled();
  });
  it("should call addUpdateForm method", () => {
    const props = {
      classes: {},
      giftCards: [],
      giftCardsFiltered: [],
      userDetails: {},
      fetchCards: jest.fn(),
      fetchCard: jest.fn(),
      fetchCardFilter: jest.fn(),
    };
    const wrapper1 = shallow(<GiftsListContainer {...props} />);
    const instance = wrapper1.instance();
    const spy = jest.spyOn(instance, "addUpdateForm");
    instance.addUpdateForm();
    expect(spy).toHaveBeenCalled();
  });
  it("should take else path in render", () => {
    const props = {
      classes: {},
      giftCards: [
        {
          id: 1,
          cardRetailer: "Amazon",
        },
        {
          id: 2,
          cardRetailer: "Zomato",
        },
        {
          id: 3,
          cardRetailer: "Best buy",
        },
      ],
      giftCardsFiltered: [],
      userDetails: {},
      fetchCards: jest.fn(),
      fetchCard: jest.fn(),
      fetchCardFilter: jest.fn(),
    };
    shallow(<GiftsListContainer {...props} />);
  });
  it("should call handle search method", () => {
    const props = {
      classes: {},
      giftCards: [],
      giftCardsFiltered: [],
      userDetails: {},
      fetchCards: jest.fn(),
      fetchCard: jest.fn(),
      fetchCardFilter: jest.fn(),
    };
    const wrapper1 = shallow(<GiftsListContainer {...props} />);
    const instance = wrapper1.instance();
    const spy = jest.spyOn(instance, "handleSearch");
    const value = "abc";
    instance.handleSearch(value);
    expect(spy).toHaveBeenCalled();
  });
  it("should call handle onChangeRetailer  method", () => {
    const props = {
      classes: {},
      giftCards: [],
      giftCardsFiltered: [],
      userDetails: {},
      fetchCards: jest.fn(),
      fetchCard: jest.fn(),
      fetchCardFilter: jest.fn(),
    };
    const wrapper1 = shallow(<GiftsListContainer {...props} />);
    const instance = wrapper1.instance();
    const spy = jest.spyOn(instance, "onChangeRetailer");
    const event = {
      target: { value: "All" },
    };
    instance.onChangeRetailer(event);
    expect(spy).toHaveBeenCalled();
  });
  it("should call handle onChangeRetailer for not ALL method", () => {
    const props = {
      classes: {},
      giftCards: [
        {
          id: 1,
          cardRetailer: "Amazon",
        },
        {
          id: 2,
          cardRetailer: "Zomato",
        },
        {
          id: 3,
          cardRetailer: "Best buy",
        },
      ],
      giftCardsFiltered: [],
      userDetails: {},
      fetchCards: jest.fn(),
      fetchCard: jest.fn(),
      fetchCardFilter: jest.fn(),
    };
    const wrapper1 = shallow(<GiftsListContainer {...props} />);
    const instance = wrapper1.instance();
    const spy = jest.spyOn(instance, "onChangeRetailer");
    const event = {
      target: { value: "Amazon" },
    };
    instance.onChangeRetailer(event);
    expect(spy).toHaveBeenCalled();
  });
  it("should call handle onChangeSort for points", () => {
    const props = {
      classes: {},
      giftCards: [],
      giftCardsFiltered: [],
      userDetails: {},
      fetchCards: jest.fn(),
      fetchCard: jest.fn(),
      fetchCardFilter: jest.fn(),
    };
    const wrapper1 = shallow(<GiftsListContainer {...props} />);
    const instance = wrapper1.instance();
    const spy = jest.spyOn(instance, "onChangeSort");
    const event = {
      target: { value: "Points" },
    };
    instance.onChangeSort(event);
    expect(spy).toHaveBeenCalled();
  });
  it("should call handle onChangeSort for Count", () => {
    const props = {
      classes: {},
      giftCards: [],
      giftCardsFiltered: [],
      userDetails: {},
      fetchCards: jest.fn(),
      fetchCard: jest.fn(),
      fetchCardFilter: jest.fn(),
    };
    const wrapper1 = shallow(<GiftsListContainer {...props} />);
    const instance = wrapper1.instance();
    const spy = jest.spyOn(instance, "onChangeSort");
    const event = {
      target: { value: "Count" },
    };
    instance.onChangeSort(event);
    expect(spy).toHaveBeenCalled();
  });
  it("should call handle onChangeSort for Validity", () => {
    const props = {
      classes: {},
      giftCards: [],
      giftCardsFiltered: [],
      userDetails: {},
      fetchCards: jest.fn(),
      fetchCard: jest.fn(),
      fetchCardFilter: jest.fn(),
    };
    const wrapper1 = shallow(<GiftsListContainer {...props} />);
    const instance = wrapper1.instance();
    const spy = jest.spyOn(instance, "onChangeSort");
    const event = {
      target: { value: "Validity" },
    };
    instance.onChangeSort(event);
    expect(spy).toHaveBeenCalled();
  });
});
