import { EmbedOptions,  Message } from "eris"
import { moduleDescriptions } from "../commandHandler"

export default {
  label: "help",
  description: "Shows this list of commands.",
  exec: (msg: string, ctx: Message) => {
    const prefix = (process.env["PREFIX"] || "!")
    const cmdlist = [...moduleDescriptions.entries()].map((value) => `${prefix}${value[0]}: ${value[1]}`)
    const cmddesc = cmdlist.join("\n")
    const embed: EmbedOptions = {
      author: { name: "Available commands:", icon_url: ctx.author.avatarURL },
      description: cmddesc,
      color: 0x615BFF
    }
    ctx.channel.createMessage({content: "", embed})
  }
}
