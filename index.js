const Discord = require("discord.js");

const generateImage = require("./generateImage")

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello World!")
    }
})

const welcomeChannelId = "926530810008453120"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> benvenuto!`,
        files: [img]
    })
})

client.login(OTg0OTUyNjcwNjg5MzI1MDc3.GAmVt0.f42T5yDe0rKSkRyuohcW7uvoKNFWsfWgKAxmbM)