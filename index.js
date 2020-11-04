const botConfig = require("./botconfig.json");

const discord = require("discord.js");
const client = new discord.Client();
const collection = new discord.Collection();

const fs= require('fs');

client.on("ready", async  () => {
    console.log(`Ik ben online.`);
});

fs.readdir("./commands/", (err, files) => {
    if (err) console.log(err)

    var jsfile = files.filter(f => f.split(".").pop() === 'js')
    if (jsfile.length <= 0) {
         console.log("Retrieving files (commands) failed.");
         return;
    }
    
    jsfile.forEach((f, i) => {
        var fileGet = require(`./commands/${f}`);
        console.log(`Retrieving file ${f}`);

        collection.set(fileGet.help.name, fileGet);

    })
});

client.on("message", async message => {
    if(message.channel.type === "dm") return;
    var prefix = botConfig.prefix;
    var messageArray = message.content.split(" ");
    var command = messageArray[0];
    var arguments = messageArray.slice(1);

    var commands = collection.get(command.slice(prefix.length));
    if(commands) commands.run(client, message, arguments);

});

client.login(proces.env.token);