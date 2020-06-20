import loginReducer from "./loginReducer";
import { LOGIN, LOGOUT } from "../actions/types";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
configure({ adapter: new Adapter() });

let user = { id: 1, email: "test@test.com" };
let INITIAL_STATE = {
  loginStatus: false,
  detailsObject: {},
};

describe("Login Reducer_Component", () => {
  it("should test the initial state of reducer", () => {
    expect(loginReducer(INITIAL_STATE, {})).toEqual(INITIAL_STATE);
  });
  it("should test the Login of reducer", () => {
    const login = {
      type: LOGIN,
      payload: { id: 1, email: "test@test.com" },
    };
    expect(loginReducer(INITIAL_STATE, login).loginStatus).toBe(true);
    expect(loginReducer(INITIAL_STATE, login).detailsObject).toStrictEqual(
      user
    );
  });
  it("should test the Logout of reducer", () => {
    const logout = {
      type: LOGOUT,
      payload: {
        data: user,
      },
    };
    expect(loginReducer(INITIAL_STATE, logout).loginStatus).toBe(false);
    expect(loginReducer(INITIAL_STATE, logout).detailsObject).toStrictEqual({});
  });
});
