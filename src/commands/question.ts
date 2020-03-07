import { Message } from "eris"

const getRandomResponse = () => {
  const options = [
    'Yes',
    'Hmm, no',
    'Im busy right now, Producer. I cant answer all of your questions...',
    'Maybe if you buy me premium orange juice, you could get an answer, nihihi~',
    'Im not sure about that',
    'Super Idol Iori-chan says thats a big YES!',
    'Definitively no! What were you thinking about, Producer?',
  ]
  const choice = Math.floor(Math.random() * options.length)
  return options[choice]
}

export default {
  label: "question",
  description: "Answers your Yes or No question!",
  exec: (msg: string, ctx: Message) => {
    const response = getRandomResponse()
    ctx.channel.createMessage(response)
  }
}

