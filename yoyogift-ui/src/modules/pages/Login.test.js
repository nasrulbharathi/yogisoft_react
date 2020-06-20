import React from "react";
import { shallow } from "enzyme";
import axiosWrapper from "../../apis/axiosCreate";
import { Login } from "./Login";

describe("Login Form testing ", () => {
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
  it("testing handle email change", () => {
    const wrapper = shallow(<Login {...props} />);
    const instance = wrapper.instance();
    const data = {
      target: {
        value: "test@test.com",
      },
    };
    instance.handlEmailChange(data);
    expect(wrapper.state().emailError).toEqual(false);
  });
  it("testing not handle email change", () => {
    const wrapper = shallow(<Login {...props} />);
    const instance = wrapper.instance();
    const data = {
      target: {
        value: "test",
      },
    };
    instance.handlEmailChange(data);
    expect(wrapper.state().emailError).toEqual(true);
  });
  it("testing handle password change", () => {
    const wrapper = shallow(<Login {...props} />);
    const instance = wrapper.instance();
    const data = {
      target: {
        value: "Batman",
      },
    };
    instance.handlPasswordChange(data);
    expect(wrapper.state().passwordError).toEqual(false);
  });
  it("testing handle password error change", () => {
    const wrapper = shallow(<Login {...props} />);
    const instance = wrapper.instance();
    const data = {
      target: {
        value: "",
      },
    };
    instance.handlPasswordChange(data);
    expect(wrapper.state().passwordError).toEqual(true);
  });
  it("testing Sign Up", () => {
    const wrapper = shallow(<Login {...props} />);
    const instance = wrapper.instance();
    instance.signUp();
    expect(instance.isSignUpTest).toEqual(true);
  });
  it("testing Sign In", async () => {
    const wrapper = shallow(<Login {...props} />);
    const instance = wrapper.instance();
    const data2 = [
      {
        id: 1,
        first_name: "test first name",
        last_name: "test last name",
        email: "test@test.com",
        balance_points: 1000,
        isAdmin: true,
      },
    ];
    axiosWrapper.get = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: data2 }));
    await instance.signIn();
  });
  it("testing Sign In for no password", async () => {
    const wrapper = shallow(<Login {...props} />);
    const instance = wrapper.instance();
    const data2 = [];
    axiosWrapper.get = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: data2 }));
    await instance.signIn();
    expect(instance.state.passwordError).toEqual(false);
  });
  it("testing Sign In", async () => {
    const wrapper = shallow(<Login {...props} />);
    const instance = wrapper.instance();
    const data2 = [
      {
        id: 1,
        first_name: "test first name",
        last_name: "test last name",
        email: "test@test.com",
        balance_points: 1000,
        isAdmin: true,
        password: "Batman",
      },
    ];
    axiosWrapper.get = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: data2 }));
    instance.setState({ password: "Batman" }, async () => {
      await instance.signIn();
      expect(instance.isSignInTest).toEqual(true);
    });
  });
  it("testing Google Sign In", async () => {
    const wrapper = shallow(<Login {...props} />);
    const instance = wrapper.instance();
    const data2 = [
      {
        id: 1,
        first_name: "test first name",
        last_name: "test last name",
        email: "test@test.com",
        balance_points: 1000,
        isAdmin: true,
        password: "Batman",
      },
    ];
    const googleData = {
      profileObj: {
        givenName: "test",
        familyName: "family",
        email: "abc@gmail.com",
      },
    };
    axiosWrapper.get = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: data2 }));
    await instance.responseGoogle(googleData);
    expect(instance.isGoogleSignInTest).toEqual(true);
  });
  it("testing Google Sign Up", async () => {
    const wrapper = shallow(<Login {...props} />);
    const instance = wrapper.instance();
    const data2 = [];
    const googleData = {
      profileObj: {
        givenName: "test",
        familyName: "family",
        email: "abc@gmail.com",
      },
    };
    axiosWrapper.get = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: data2 }));
    await instance.responseGoogle(googleData);
    expect(instance.isGoogleSignUpTest).toEqual(true);
  });
});
