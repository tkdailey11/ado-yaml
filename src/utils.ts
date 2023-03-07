import yaml from "js-yaml"
import fs from "fs"

export function askForInput(prompt: string): string {
  return "readlineSync.question(prompt)"
}

export function isStringArray(arr: Array<any>): boolean {
  return arr.every((value) => typeof value == "string")
}

export function isNumberArray(arr: Array<any>): boolean {
  return arr.every((value) => typeof value == "number")
}

export function readFileSync(filepath: string): string {
  // Get document, or throw exception on error
  try {
    return fs.readFileSync(filepath, "utf8")
  } catch (e) {
    console.log(e)
    return ""
  }
}

export function saveFileAsync(filepath: string, doc: yaml.Type): void {
  const newDoc = yaml.dump(doc)
  try {
    fs.writeFileSync(filepath, newDoc, { encoding: "utf8", flag: "w" })
  } catch (e) {
    console.log(e)
  }
}
