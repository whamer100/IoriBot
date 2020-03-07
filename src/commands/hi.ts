import { Message } from "eris"

export default {
  label: "hi",
  description: "Says hi back~",
  exec: (msg: string, ctx: Message) => {
    ctx.channel.createMessage("Nihihi, hello producer!")
  }
}
