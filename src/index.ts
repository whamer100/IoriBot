import dotenv from "dotenv"
dotenv.config()
import Eris from "eris"
import { exec, moduleDescriptions, setup } from "./commandHandler"
import { handleEvents } from "./events";
import "./startup"

const TOKEN = process.env["TOKEN"]!

const bot = new Eris.Client(TOKEN)

bot.on(
  "messageCreate", (msg) => {
    exec(msg.content, msg)
  }
)

setup()

handleEvents(bot, moduleDescriptions)

console.log("Connecting bot...")
bot.connect()
