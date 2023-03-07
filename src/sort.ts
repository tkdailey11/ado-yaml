import { isNumberArray, isStringArray } from "./utils.js"

export function sortArray(arr: Array<any>, ascending = true): Array<any> {
  if (isStringArray(arr) || isNumberArray(arr)) {
    if (!ascending) {
      return arr.sort((a, b) => (a > b ? -1 : 1))
    }
    return arr.sort()
  }

  const namesArr = arr.filter((val) => Object.keys(val).includes("name"))
  const otherArr = arr.filter((val) => !namesArr.includes(val))

  ascending
    ? namesArr.sort((a, b) => (a.name < b.name ? -1 : 1))
    : namesArr.sort((a, b) => (a.name > b.name ? -1 : 1))

  return [...namesArr, ...otherArr]
}

export function sortObj(yamlObj: any, ascending = true): any {
  const temp = yamlObj
  Object.keys(temp).forEach((key) => {
    if (Array.isArray(temp[key])) {
      Object.assign(temp[key], sortArray(temp[key]))
    } else if (typeof temp[key] == "object") {
      Object.assign(temp[key], sortObj(temp[key], ascending))
    }
  })

  return temp
}
