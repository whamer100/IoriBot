import { Guild, Member, Client, TextChannel } from "eris"
import { boxContents } from "./utils";

const logStartup = (client: Client, cmdDesc: Map<string, string>) => {
  const stat = `Logged in as ${client.user.username} [id:${client.user.id}]`;
  const commands = [...cmdDesc.entries()].map(
    (value) => `${process.env.PREFIX || "!"}${value[0]}: ${value[1]}`
  )
  const out = boxContents("Started Up!", stat, commands.join("\n"))
  console.log(out);
};

const onReady = (client: Client, cmdDesc: Map<string, string>) => {
  logStartup(client, cmdDesc)
}

export const handleEvents = (client: Client, cmdDesc: Map<string, string>) => {
  client.on("ready", () => onReady(client, cmdDesc));
}

export const welcomeMessage = (client: Client, guild: Guild, member: Member) => {
  const welcomeChannelId = guild.systemChannelID!
  const welcomeChannel = client.getChannel(welcomeChannelId) as TextChannel
  
  const welcomeMessageText = `Welcome, ${member.mention}! Work hard, and make sure you don't mess up and embarrass me, alright!?`
  
  welcomeChannel.createMessage(welcomeMessageText)
}