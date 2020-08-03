import { Str } from "../src/modules/Str";

test("hello", () => {
  expect(Str.lower('Test Lower')).toEqual("test lower");
});