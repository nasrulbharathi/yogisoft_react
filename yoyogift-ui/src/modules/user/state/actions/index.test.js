import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  SENT_CARDS,
  RECEIVED_CARDS,
  USER_DETAILS,
  REDEEM_CARD,
  UPDATE_BALANCE,
  UPDATE_TRANSACT,
} from "./types";
import {
  fetchReceivedCards,
  fetchSentCards,
  userDetails,
  redeemCard,
  updateUserBalance,
  updateTransact,
} from "./index";
import axiosWrapper from "../../../../apis/axiosCreate";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("User Actions", () => {
  let store;
  beforeEach(() => {
    store = mockStore();
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("should handle fetchReceivedCards action", async () => {
    axiosWrapper.get = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: ["card1", "card2"] }));
    const dispatch = jest.fn().mockImplementation((args) => {});
    const response = fetchReceivedCards();
    await response(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: RECEIVED_CARDS,
      payload: ["card1", "card2"],
    });
  });
  it("should handle fetchSentCards action", async () => {
    axiosWrapper.get = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: ["card1", "card2"] }));
    const dispatch = jest.fn().mockImplementation((args) => {});
    const response = fetchSentCards();
    await response(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: SENT_CARDS,
      payload: ["card1", "card2"],
    });
  });
  it("should handle userDetails action", async () => {
    axiosWrapper.get = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: "user1" }));
    const dispatch = jest.fn().mockImplementation((args) => {});
    const response = userDetails();
    await response(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: USER_DETAILS,
      payload: "user1",
    });
  });
  it("should handle redeem card action", async () => {
    const obj = {
      cardId: 1,
      cardName: "test",
    };
    axiosWrapper.delete = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: "deleted" }));
    axiosWrapper.post = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: "card data" }));
    const dispatch = jest.fn().mockImplementation((args) => {});
    const response = redeemCard(1, obj);
    await response(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: REDEEM_CARD,
      payload: "card data",
    });
  });
  it("should handle update User Balance action", async () => {
    axiosWrapper.patch = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: "user data" }));
    const dispatch = jest.fn().mockImplementation((args) => {});
    const response = updateUserBalance(1, 10);
    await response(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: UPDATE_BALANCE,
      payload: "user data",
    });
  });
  it("should handle update Transact action", async () => {
    const obj = {
      cardId: 1,
      cardName: "test",
    };
    axiosWrapper.post = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: "card data" }));
    const dispatch = jest.fn().mockImplementation((args) => {});
    const response = updateTransact(obj);
    await response(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: UPDATE_TRANSACT,
      payload: "card data",
    });
  });
});
