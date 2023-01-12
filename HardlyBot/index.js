const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions } = require(`discord.js`);

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("ready", () => {
    console.log("Hardly bot is online!");

    client.user.setActivity(`Hello`, { type: "WATCHING" })
})

client.login("MTA2MjkyNjU2NjQyMzc5NzgwMA.GSACy6.SymWTJONdgZNRrcvZNOfhTMZt4fcX80M_QFgsM");