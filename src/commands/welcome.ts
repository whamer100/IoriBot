import { Message } from "eris"
import fs = require("fs");

const welcomeImage: Buffer = fs.readFile()

export default {
  label: "welcome",
  description: "Welcomes a user!",
  exec: (msg: string, ctx: Message) => {
    ctx.channel.createMessage("https://i.imgur.com/2oX2DOy.png")
  }
}
