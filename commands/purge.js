const {Client, Collection, MessageEmbed} = require("discord.js");

module.exports.run = async(client, message, args) => {
    if(message.deleteble) {
        message.delete();
    }

    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.delete({timeout: 0}).catch(err => console.log(`Error trying to delete unauthorized command. ${err}`));
    }

    if(isNaN(args[0]) || parseInt(args[0]) <=0) {
        return message.delete({timeout: 0}).catch(err => console.log(`Error trying to delete unauthorized command. ${err}`));
    }

    if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
        return message.delete({timeout: 0}).catch(err => console.log(`Error trying to delete unauthorized command. ${err}`));
    }

    let deleteAmount;

    if(parseInt(args[0]) > 100) {
        deleteAmount = 100;
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount, true)
    .catch(err => console.log(`Error trying to delete messages ${err}`));
};

module.exports.help = {
    name: "purge"
}