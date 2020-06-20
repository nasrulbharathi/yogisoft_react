import React from "react";
import { shallow } from "enzyme";
import axiosWrapper from "../../apis/axiosCreate";
import { SignUp } from "./SignUp";

describe("Sign Up For testing ", () => {
  let userDetailsData = {
    id: 1,
    email: "test@test.com",
  };
  const props = {
    isLoggedIn: false,
    userDetails: userDetailsData,
    login: jest.fn(),
    createUser: jest.fn(),
  };
  it("testing handle handlfirstNameChange change", () => {
    const wrapper = shallow(<SignUp {...props} />);
    const instance = wrapper.instance();
    const data = {
      target: {
        value: "test",
      },
    };
    instance.handlfirstNameChange(data);
    expect(wrapper.state().firstNameError).toEqual(false);
  });
  it("testing handle handlfirstNameChange else ", () => {
    const wrapper = shallow(<SignUp {...props} />);
    const instance = wrapper.instance();
    const data = {
      target: {
        value: "",
      },
    };
    instance.handlfirstNameChange(data);
    expect(wrapper.state().firstNameError).toEqual(true);
  });

  it("testing handle handllastNameChange ", () => {
    const wrapper = shallow(<SignUp {...props} />);
    const instance = wrapper.instance();
    const data = {
      target: {
        value: "teste",
      },
    };
    instance.handllastNameChange(data);
    expect(wrapper.state().lastNameError).toEqual(false);
  });

  it("testing handle handllastNameChange else", () => {
    const wrapper = shallow(<SignUp {...props} />);
    const instance = wrapper.instance();
    const data = {
      target: {
        value: "",
      },
    };
    instance.handllastNameChange(data);
    expect(wrapper.state().lastNameError).toEqual(true);
  });

  it("testing handle email change", () => {
    const wrapper = shallow(<SignUp {...props} />);
    const instance = wrapper.instance();
    const data = {
      target: {
        value: "test@test.com",
      },
    };
    instance.handlEmailChange(data);
    expect(wrapper.state().emailError).toEqual(false);
  });

  it("testing handle email change else ", () => {
    const wrapper = shallow(<SignUp {...props} />);
    const instance = wrapper.instance();
    const data = {
      target: {
        value: "test",
      },
    };
    instance.handlEmailChange(data);
    expect(wrapper.state().emailError).toEqual(true);
  });

  it("testing handle handlPasswordChange change if ", () => {
    const wrapper = shallow(<SignUp {...props} />);
    const instance = wrapper.instance();
    const data = {
      target: {
        value: "test",
      },
    };
    instance.handlPasswordChange(data);
    expect(wrapper.state().passwordError).toEqual(false);
  });

  it("testing handle handlPasswordChange change else ", () => {
    const wrapper = shallow(<SignUp {...props} />);
    const instance = wrapper.instance();
    const data = {
      target: {
        value: "",
      },
    };
    instance.handlPasswordChange(data);
    expect(wrapper.state().passwordError).toEqual(true);
  });

  it("testing handle handlConfirmPasswordChange change ", () => {
    const wrapper = shallow(<SignUp {...props} />);
    const instance = wrapper.instance();
    instance.setState({ password: "Batman" }, () => {
      const data = {
        target: {
          value: "Batman",
        },
      };
      instance.handlConfirmPasswordChange(data);
      expect(wrapper.state().confirmpasswordError).toEqual(false);
    });
  });

  it("testing handle handlConfirmPasswordChange change ", () => {
    const wrapper = shallow(<SignUp {...props} />);
    const instance = wrapper.instance();
    const data = {
      target: {
        value: "",
      },
    };
    instance.setState({ password: "Batman" }, () => {
      instance.handlConfirmPasswordChange(data);
      expect(wrapper.state().confirmpasswordError).toEqual(true);
    });
  });
  it("testing Sign Up", async () => {
    const wrapper = shallow(<SignUp {...props} />);
    const instance = wrapper.instance();
    const data2 = [];
    axiosWrapper.get = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: data2 }));
    await instance.signUp();
  });
});
