import usersReducer from "./usersReducer";
import {
  RECEIVED_CARDS,
  SENT_CARDS,
  USER_DETAILS,
  REDEEM_CARD,
  UPDATE_BALANCE,
  UPDATE_TRANSACT,
} from "./../actions/types";
import {
  getGiftCardData,
  userDetailsData,
} from "../../../../mockData/getMockData";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
let INITIAL_STATE = {
  cards: [],
  UserDetails: [],
};
configure({ adapter: new Adapter() });
describe("GiftsReducer_Component", () => {
  it("should test the initial state of reducer", () => {
    expect(usersReducer(INITIAL_STATE, {})).toEqual(INITIAL_STATE);
  });
  it("should handle RECEIVED_CARDS", () => {
    const received_cards = {
      type: RECEIVED_CARDS,
      payload: [getGiftCardData],
    };
    expect(usersReducer(INITIAL_STATE, received_cards).cards.length).toEqual(1);
  });
  it("should handle Sent_CARDS", () => {
    const sent_cards = {
      type: SENT_CARDS,
      payload: [getGiftCardData],
    };
    expect(usersReducer(INITIAL_STATE, sent_cards).cards.length).toEqual(1);
  });
  it("should handle USER_DETAILS", () => {
    const user_details = {
      type: USER_DETAILS,
      payload: [userDetailsData],
    };
    expect(
      usersReducer(INITIAL_STATE, user_details).UserDetails.length
    ).toEqual(1);
  });
  it("should handle REDEEM_CARD", () => {
    const reedem_card = {
      type: REDEEM_CARD,
      payload: [getGiftCardData],
    };
    INITIAL_STATE.cards = [getGiftCardData];
    expect(usersReducer(INITIAL_STATE, reedem_card).cards.length).toEqual(1);
  });
  it("should handle UPDATE_BALANCE", () => {
    const update_balance = {
      type: UPDATE_BALANCE,
      payload: [userDetailsData],
    };
    expect(
      usersReducer(INITIAL_STATE, update_balance).UserDetails.length
    ).toEqual(1);
  });
  it("should handle UPDATE_TRANSACT", () => {
    const update_transact = {
      type: UPDATE_TRANSACT,
      payload: [getGiftCardData],
    };
    expect(usersReducer(INITIAL_STATE, update_transact).cards.length).toEqual(
      1
    );
  });
});
