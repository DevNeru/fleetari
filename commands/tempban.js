const {Client, Collection, MessageEmbed, GuildMember} = require("discord.js");
const ms = require("ms");
const delay = (msec) => new Promise((resolve) => setTimeout(resolve, msec));

module.exports.run = async(client, message, args) => {
    
    var user = message.guild.member(message.mentions.users.first());
    var time = args[1];
    var reden = args.join(" ").slice(22);
    var tempBanBericht = new MessageEmbed()
        .setTitle(`Beste Speler, ${user}`)
        .setDescription(`
        Haista vittu!, you are temporarily banned! What now? 
        Don't worry, a temporary ban can last up to 3 days.

        In the meantime, read the rules firmly. Click [here](https://www.google.com) to see the rules.
        `)
        .setColor("BLUE")
        .setAuthor("That car of yours ruins my chat!", "https://i.imgur.com/Y3HIdVi.png")
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
        return message.reply("Provide a reason. Exmp \`Spam\`").then(m => m.delete({timeout:3000}))
    }

    if(ms(time)) {

        user.send(tempBanBericht);
        await delay(1000);
        message.guild.member(user).ban(reden);

        message.channel.send(`${user} is ge-tempbanned voor ${reden}`);

        setTimeout(function() {
            message.guild.members.unban(user.id);
            message.channel.send(`${user} is ge-unbanned`)
        }, ms(time))

    }else{
        return message.reply("Provide a time. Exmp \`1h\`").then(message.delete({timeout:3000}))
    }

}


module.exports.help = {
    name: "tempban"
}