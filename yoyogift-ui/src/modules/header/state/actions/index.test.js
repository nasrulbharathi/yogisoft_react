import { LOGIN, LOGOUT } from "./types";
import { login, logout, createUser } from "./index";
import axiosWrapper from "../../../../apis/axiosCreate";

const user = { id: 1, email: "test@test.com" };

describe("Login Actions", () => {
  it("should handle login action", () => {
    const response = login(user);
    expect(response).toStrictEqual({
      type: LOGIN,
      payload: user,
    });
  });
  it("should handle logout action", () => {
    const response = logout();
    expect(response).toStrictEqual({
      type: LOGOUT,
      payload: null,
    });
  });
  it("should handle create user action", async () => {
    axiosWrapper.post = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ userDetails: "user1" }));
    const dispatch = jest.fn().mockImplementation((args) => {});
    const response = createUser({ user: "user1" });
    await response(dispatch);
  });
});
