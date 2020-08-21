const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
	console.log("Connected as " + client.user.tag)
	var generalChannel = client.channels.get("725983086428553318") // Replace with known channel ID
	generalChannel.send("Hello, server, i'm a new JS bot! But, i'm under construction...")
})

// Get your bot's secret token from:
// https://discordapp.com/developers/applications/
// Click on your application -> Bot -> Token -> "Click to Reveal Token"
bot_secret_token = "NjEyNTc5MzAxMzA0NDM0Njkx.XVka7g.jTuv1xybvZRgy2S2WKHKlRvYFFc"

client.login(bot_secret_token)
