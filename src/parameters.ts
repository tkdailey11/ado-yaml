import yaml from "js-yaml"
import { readFileSync, askForInput } from "./utils.js"

export function fillInParamValues(filepath: any): string {
  var str = readFileSync(filepath)
  const doc: any = yaml.load(str, {})

  const params = doc["parameters"]
  if (params) {
    params.forEach((p: { [x: string]: any; name?: any }) => {
      var defVal
      if (Object.keys(p).includes("default")) {
        defVal = `${p["default"]}`
      } else {
        defVal = askForInput(
          `No default provided for ${p.name}. What value should be used?\n`
        )
      }

      const reg = new RegExp(`\\\${{\\s*parameters.${p.name}\\s*}}`)
      str = str.replace(reg, defVal)
    })
  }

  return str
}

export function sortParameters(str: string, ascending: boolean = true): string {
  const yamlObj: any = yaml.load(str)
  const keys = Object.keys(yamlObj)
  if (keys.includes("extends")) {
    const extObj = yamlObj["extends"]
    if (Object.keys(extObj).includes("parameters")) {
      const params = extObj["parameters"]
      var paramsKeys = Object.keys(params)
      paramsKeys.sort()

      var newObj: any = {}
      paramsKeys.forEach((key) => (newObj[key] = params[key]))
      extObj["parameters"] = newObj
    }
  }
  return yaml.dump(yamlObj)
}
