const {Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions} = require(`discord.js`);

const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});

client.on("ready", () => {
    console.log("Hardly bot is online!");

    client.user.setActivity(`Hello`, { type: "WATCHING" })
})

client.on("messageCreate", message => {
    //check to see if message was not from a bot
    if(!(message.author.bot)){
        //check to see if message contains "er"
        if(message.content.toLowerCase().includes("er")){
            //if the message ends in punctuation get rid of the punctuation
            var sentence = message.content;
            if(message.content.endsWith(".") || message.content.endsWith("?") || message.content.endsWith("!") || message.content.endsWith("\"")){
                sentence = sentence.substring(0, sentence.length - 1);
            }
            //check each word in the message to see if it ends with an "er"
            var arr = sentence.split(" ");
            for (let i = 0; i < arr.length; i++){
                if (arr[i].endsWith("er") || arr[i].endsWith("eR") || arr[i].endsWith("Er") || arr[i].endsWith("ER")){
                    //output hardly joke
                    message.channel.send(arr[i] + "? I hardly know her!");
                }
            }

        }
    }
})

//replace with actual bot token
client.login("BOT TOKEN");