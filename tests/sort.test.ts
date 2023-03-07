import * as adoSort from "../src/sort"

test("basic string sort - ascending", () => {
  expect(adoSort.sortArray(["1", "2", "4", "3"])).toStrictEqual([
    "1",
    "2",
    "3",
    "4",
  ])
})

test("basic string sort - descending", () => {
  expect(adoSort.sortArray(["1", "2", "4", "3"], false)).toStrictEqual([
    "4",
    "3",
    "2",
    "1",
  ])
})

test("integer sort - ascending", () => {
  expect(adoSort.sortArray([1, 2, 3, 4])).toStrictEqual([1, 2, 3, 4])
})

test("object array sort - ascending", () => {
  expect(
    adoSort.sortArray([
      { name: "a", value: "2" },
      { value: "1", name: "c" },
      { other: "1", name: "b" },
      { type: "1", name: "d" },
    ])
  ).toEqual([
    { name: "a", value: "2" },
    { other: "1", name: "b" },
    { value: "1", name: "c" },
    { type: "1", name: "d" },
  ])
})

test("object array sort - combined", () => {
  expect(
    adoSort.sortArray(
      [
        { name: "a", value: "2" },
        { value: "1", name: "c" },
        { other: "1", name: "b" },
        { type: "1", name: "d" },
        "def",
        "abc",
      ],
      false
    )
  ).toEqual([
    { type: "1", name: "d" },
    { value: "1", name: "c" },
    { other: "1", name: "b" },
    { name: "a", value: "2" },
    "def",
    "abc",
  ])
})
