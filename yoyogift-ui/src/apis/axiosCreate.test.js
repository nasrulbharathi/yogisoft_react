import { apiURL } from "../config/constants";
describe("axiosSetup testing and Constant value ", () => {
  it("testing apiURL with Positive Test case", () => {
    expect(apiURL).toBe("http://localhost:7000");
  });
});
