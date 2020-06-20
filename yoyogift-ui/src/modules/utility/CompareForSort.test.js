import {
  comparePointsAsc,
  comparePointsDesc,
  compareCountAsc,
  compareCountDesc,
  compareValidityAsc,
  compareValidityDesc,
} from "./CompareForSort.js";
import { DateFormatter } from "./DateFormatter";
import { Random_rgba } from "./Random_rgba";

describe("axiosSetup testing and Constant value ", () => {
  let card = [
    {
      cardPoints: 19,
      cardCount: 36,
      cardExpiryDate: "Mon May 04 2020 14:51:28 GMT+0530 (India Standard Time)",
    },
    {
      cardPoints: 30,
      cardCount: 35,
      cardExpiryDate: "Tue May 05 2020 14:51:28 GMT+0530 (India Standard Time)",
    },
    {
      cardPoints: 10,
      cardCount: 30,
      cardExpiryDate: "Sun May 03 2020 14:51:28 GMT+0530 (India Standard Time)",
    },
    {
      cardPoints: 12,
      cardCount: 32,
      cardExpiryDate: "Sat May 02 2020 14:51:28 GMT+0530 (India Standard Time)",
    },
    {
      cardPoints: 11,
      cardCount: 13,
      cardExpiryDate: "Fri May 01 2020 14:51:28 GMT+0530 (India Standard Time)",
    },
    {
      cardPoints: 192,
      cardCount: 31,
      cardExpiryDate: "Wed May 06 2020 14:51:28 GMT+0530 (India Standard Time)",
    },
  ];
  it("testing comparePointsAsc ", () => {
    let comparePointsAscArray = card.sort(comparePointsAsc);
    expect(comparePointsAscArray[0].cardPoints).toBe(10);
  });
  it("testing comparePointsAsc comparison if", () => {
    const a = {
      cardPoints: 10,
    };
    const b = {
      cardPoints: 12,
    };
    expect(comparePointsAsc(a, b)).toBe(-1);
  });
  it("testing comparePointsAsc comparison else", () => {
    const a = {
      cardPoints: 12,
    };
    const b = {
      cardPoints: 10,
    };
    expect(comparePointsAsc(a, b)).toBe(1);
  });
  it("testing comparePointsDesc comparison if", () => {
    const a = {
      cardPoints: 10,
    };
    const b = {
      cardPoints: 12,
    };
    expect(comparePointsDesc(a, b)).toBe(1);
  });
  it("testing comparePointsDesc comparison else", () => {
    const a = {
      cardPoints: 12,
    };
    const b = {
      cardPoints: 10,
    };
    expect(comparePointsDesc(a, b)).toBe(-1);
  });
  it("testing comparePointsDesc", () => {
    let comparePointsAscArray = card.sort(comparePointsDesc);
    expect(comparePointsAscArray[0].cardPoints).toBe(192);
  });
  it("testing compareCountAsc ", () => {
    let comparePointsAscArray = card.sort(compareCountAsc);
    expect(comparePointsAscArray[0].cardCount).toBe(13);
  });
  it("testing compareCountDesc", () => {
    let comparePointsAscArray = card.sort(compareCountDesc);
    expect(comparePointsAscArray[0].cardCount).toBe(36);
  });
  it("testing comparePointsDesc comparison if", () => {
    const a = {
      cardCount: 10,
    };
    const b = {
      cardCount: 12,
    };
    expect(compareCountDesc(a, b)).toBe(1);
  });
  it("testing compareValidityAsc ", () => {
    let comparePointsAscArray = card.sort(compareValidityAsc);
    expect(comparePointsAscArray[0].cardExpiryDate).toBe(
      "Fri May 01 2020 14:51:28 GMT+0530 (India Standard Time)"
    );
  });
  it("testing compareValidityDesc", () => {
    let comparePointsAscArray = card.sort(compareValidityDesc);
    expect(comparePointsAscArray[0].cardExpiryDate).toBe(
      "Wed May 06 2020 14:51:28 GMT+0530 (India Standard Time)"
    );
  });
  it("testing compareValidityDesc comparison if", () => {
    const a = {
      cardExpiryDate: 10,
    };
    const b = {
      cardExpiryDate: 12,
    };
    expect(compareValidityDesc(a, b)).toBe(1);
  });
  it("testing DateFormatter", () => {
    let dateValue = DateFormatter("2020-05-05");
    expect(dateValue).toBe("2020-05-05");
  });
  it("testing random_rgba", () => {
    let random_rgba_value = Random_rgba();
    expect(random_rgba_value).not.toBe("");
  });
});
