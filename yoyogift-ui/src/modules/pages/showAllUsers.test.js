import React from "react";
import { shallow, mount } from "enzyme";
import { ShowAllUsers } from "./ShowAllUsers";
import axiosWrapper from "../../apis/axiosCreate";
import { List } from "react-virtualized";

describe("should render ShowAllUsers", () => {
  it("should be rendered", () => {
    const wrapper = shallow(<ShowAllUsers />);
    expect(wrapper).toMatchSnapshot();
  });

  it("test fetchUsers ", async () => {
    const wrapper = shallow(<ShowAllUsers />);
    const instance = wrapper.instance();
    const data2 = [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ];
    axiosWrapper.get = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: data2 }));
    await instance.fetchUsers();
    expect(instance.state.users.length).toBeGreaterThanOrEqual(1);
  });
});
