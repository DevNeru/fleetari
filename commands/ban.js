const {Client, Collection, MessageEmbed, GuildMember, User} = require("discord.js");
const ms = require("ms");
const delay = (msec) => new Promise((resolve) => setTimeout(resolve, msec));

module.exports.run = async(client, message, args) => {

    var user = message.guild.member(message.mentions.users.first());
    var reden = args.join(" ").slice(22);
    var banBericht = new MessageEmbed()
        .setTitle(`Hyvää päivää, player`)
        .setColor('RED')
        .setDescription(`
        You are banned! If you didn't recieve level VI,
        You will be un-banned next periode!

        In the meantime, read the rules firmly. Click [here](https://www.google.com) to see the rules.
        `)
        .setAuthor("That car of yours ruins my chat!", "https://i.imgur.com/Ru0Szpj.png")
        .setFooter("Alivieska Roleplay");

    if(!message.member.hasPermission("BAN_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) {
        message.delete()
    }

    if(!user) {
        return message.reply("Provide a user. Exmp \`@Neru#5423\`").then(message.delete({timeout:3000}))
    }

    if(user.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("Ei ei, Jan Buh").then(message.delete({timeout:3000}))
    }

    if(!reden) {
        return message.reply("Provide a reason. Exmp \`Spam\`").then(message.delete({timeout:3000}))
    }

    user.send(banBericht);
    await delay(1000);
    message.guild.member(user).ban(reden);

    message.channel.send(`${user} is banned for${reden}`)

}

module.exports.help = {
    name: "ban"
}