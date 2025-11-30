import fs from "fs"
import path from "path"

const root = "./src/lang"
const entry = "entry.ts"
const langs = fs.readdirSync(root)
langs
  .filter((lang) => lang !== "zh-CN")
  .forEach((lang) => {
    fs.copyFileSync(path.join(root, "zh-CN", entry), path.join(root, lang, entry))
  })
