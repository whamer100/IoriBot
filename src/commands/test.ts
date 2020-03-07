import { Message } from "eris"

export default {
  label: "test",
  description: "This is a test command!",
  exec: (msg: string, ctx: Message) => {
    ctx.channel.createMessage("This is in fact, a test")
  }
}
