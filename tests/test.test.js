import { expect, test } from "vitest";
import {
  capitalize,
  reverseString,
  calculator,
  cypher,
  analyzeArray,
} from "./test.js";

const myCalculator = calculator(10, 5);

const myAnalyzer = analyzeArray([1, 2, 3]);

test("The first letter of the string must be capitalized", () => {
  expect(capitalize("ciao")).toBe("Ciao");
});

test("Only the first letter must be capitalize, even if the string if full caps", () => {
  expect(capitalize("cIAo")).toBe("Ciao");
});

test("The string must be reversed", () => {
  expect(reverseString("ciao")).toBe("oaic");
});

test("Even with some capitalized letters"),
  () => {
    expect(reverseString("cIaO")).toBe("OaIc");
  };

test("Must return the sum of A and B", () => {
  expect(myCalculator.add(10, 5)).toBe(15);
});

test("Must return the substraction of A and B", () => {
  expect(myCalculator.substract(10, 5)).toBe(5);
});

test("Must return the division of A and B", () => {
  expect(myCalculator.divide(10, 5)).toBe(2);
});

test("Must return IMPOSSIBLE if the second number is ZERO", () => {
  expect(myCalculator.divide(50, 0)).toBe("impossible");
});

test("Must return the multiply of A and B", () => {
  expect(myCalculator.multiply(10, 5)).toBe(50);
});

test("The string has to be shifted with the right positions", () => {
  expect(cypher("ciao", 2)).toBe("ekcq");
});

test("The string has to be shifted with the right positions", () => {
  expect(cypher("Ciao", 2)).toBe("Ekcq");
});

test("The string has to be shifted with the right positions", () => {
  expect(cypher("Zio!", 2)).toBe("Bkq#");
});

test("It must the return an Object, with Min, Max, Average and length of the array", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    min: 1,
    max: 5,
    avg: 3,
    length: 5,
  });
});

test("It must the return an Object, with Min, Max, Average and length of the array", () => {
  expect(analyzeArray([1, 2, 3, 4, 5, 10, 200, 500, 765])).toEqual({
    min: 1,
    max: 765,
    avg: 165.55555555555554,
    length: 9,
  });
});
