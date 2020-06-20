import React from "react";
import { shallow } from "enzyme";
import { TablePaginationActions } from "./TablePaginationActionsWrapped";

describe("TablePaginationActions ", () => {
  it("should be rendered", () => {
    const props = {
      classes: {},
      count: 100,
      onChangePage: jest.fn(),
      page: 1,
      rowsPerPage: 10,
      theme: {},
    };
    const wrapper = shallow(<TablePaginationActions {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should be defined", () => {
    expect(TablePaginationActions).toBeDefined();
  });
  it("should Invoke handleFirstPageButtonClick", () => {
    const props = {
      classes: {},
      count: 100,
      onChangePage: jest.fn(),
      page: 1,
      rowsPerPage: 10,
      theme: {},
    };
    const wrapper = shallow(<TablePaginationActions {...props} />);
    const instance = wrapper.instance();
    instance.handleFirstPageButtonClick();
    expect(props.onChangePage).toBeCalled();
  });
  it("should Invoke handleBackButtonClick", () => {
    const props = {
      classes: {},
      count: 100,
      onChangePage: jest.fn(),
      page: 1,
      rowsPerPage: 10,
      theme: {},
    };
    const wrapper = shallow(<TablePaginationActions {...props} />);
    const instance = wrapper.instance();
    instance.handleBackButtonClick();
    expect(props.onChangePage).toBeCalled();
  });
  it("should Invoke handleNextButtonClick", () => {
    const props = {
      classes: {},
      count: 100,
      onChangePage: jest.fn(),
      page: 1,
      rowsPerPage: 10,
      theme: {},
    };
    const wrapper = shallow(<TablePaginationActions {...props} />);
    const instance = wrapper.instance();
    instance.handleNextButtonClick();
    expect(props.onChangePage).toBeCalled();
  });
  it("should Invoke handleLastPageButtonClick", () => {
    const props = {
      classes: {},
      count: 100,
      onChangePage: jest.fn(),
      page: 1,
      rowsPerPage: 10,
      theme: {},
    };
    const wrapper = shallow(<TablePaginationActions {...props} />);
    const instance = wrapper.instance();
    instance.handleLastPageButtonClick();
    expect(props.onChangePage).toBeCalled();
  });
});
