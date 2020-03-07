import { Message } from "eris"
import fs from "fs"

const modules = new Map<string, (arg0: string, arg1: Message) => void>()
export const moduleDescriptions = new Map<string, string>()

interface Command { default: {
  label: string,
  description: string,
  exec: (arg0: string, arg1: Message) => void
}}

export const setup = () => {
  console.log("Initializing commands...")
  modules.clear()

  for (const file of fs.readdirSync("./dist/commands")) {
    if (file.endsWith(".js")) {
      const _: Command = require(`./commands/${file.replace(".js", "")}`)
      if (_.default.label === undefined || _.default.exec === undefined) {
        console.log(`- Unknown script "./dist/commands/${file}" present in commands directory!`)
        continue
      }
      modules.set(_.default.label, _.default.exec)
      moduleDescriptions.set(_.default.label, _.default.description)
    }
  }
}

export const exec = (om: string, ctx: Message) => {
  const prefix = process.env.PREFIX!
  if (om.startsWith(prefix)) {
    const m = om.substr(prefix.length)
    const [l, msg] = m.split(" ", 1)
    const label = l.toLowerCase()

    if (modules.has(label)) {
      modules.get(label)!(msg, ctx)
    }
  }
}
