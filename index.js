const { Client, GatewayIntentBits } = require('discord.js')
require('dotenv/config')

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
})

client.on('ready', () => {
    console.log('Bot Ready')
})

client.on('messageCreate', message => {

    if (message.content.includes("https://x.com/") == true) {
        let xLink = message.content;
        message.reply(xLink.replace("https://x.com/", "https://fxtwitter.com/"));
    } else if (message.content.includes("https://twitter.com/") == true) {
        let xLink = message.content;
        message.reply(xLink.replace("https://twitter.com/", "https://fxtwitter.com/"));
    }


})

client.login(process.env.TOKEN)