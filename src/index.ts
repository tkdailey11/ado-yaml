import yaml from "js-yaml"
import { readFileSync } from "./utils.js"
import { sortObj } from "./sort.js"

const yamlStr = readFileSync("./examples/dev-build.ado-pipeline.yaml")
const yamlObj = yaml.load(yamlStr)
console.log(sortObj(yamlObj)["parameters"][2]["values"])
