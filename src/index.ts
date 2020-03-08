import dotenv from "dotenv"
dotenv.config()
import Eris from "eris"
import { exec, moduleDescriptions, setup } from "./commandHandler"
import { handleEvents, welcomeMessage } from "./events";
import "./startup"

const TOKEN = process.env["TOKEN"]!

const bot = new Eris.Client(TOKEN)

bot.on(
  "messageCreate", (msg) => {
    exec(msg.content, msg)
  }
)

bot.on(
  "guildMemberAdd", (guild, member) => {
    welcomeMessage(bot, guild, member)
  }
)

setup()

handleEvents(bot, moduleDescriptions)

console.log("Connecting bot...")
bot.connect()
