import { sum } from "../src/index";

describe("sum", () => {
  test("works", () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
