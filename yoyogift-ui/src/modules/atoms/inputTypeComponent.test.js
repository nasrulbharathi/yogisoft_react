import React from "react";
import { shallow } from "enzyme";
import InputTypeComponent from "./InputTypeComponent";
import { Input } from "@material-ui/core";
import { InputAdornment } from "@material-ui/core";

const response = () => Promise.resolve("");

describe("InputTypeComponent", () => {
  const props = {
    fieldFullWidth: "",
    inputError: "",
    styles: {},
    inputDisabled: false,
    inputId: 1,
    inputName: "text",
    inputType: "text",
    inputValue: "",
    handleInputChange: jest.fn(),
    inputPlaceholder: "Placehoder",
    endAdornment: false,
    startAdornment: false,
    inputHelperText: "",
  };
  it("should be defined", () => {
    expect(InputTypeComponent).toBeDefined();
  });
  it("should render InputTypeComponent", () => {
    const component = shallow(<InputTypeComponent {...props} />);
    expect(component).toMatchSnapshot();
  });
  it("should check for onChange method (2)", () => {
    const component = shallow(<InputTypeComponent {...props} />);
    component.find(Input).at(0).props().onChange();
    expect(props.handleInputChange).toBeCalled();
  });
});
