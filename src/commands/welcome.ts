import { Message } from "eris"
import fs = require("fs");

const welcomeImage = fs.readFileSync("attachments/welcome.png")

export default {
  label: "welcome",
  description: "Welcomes a user!",
  exec: (msg: string, ctx: Message) => {
    const attachment = {
      file: welcomeImage,
      name: "welcome.png"
    }
    ctx.channel.createMessage("", attachment)
  }
}
