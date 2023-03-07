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
