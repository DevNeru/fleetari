const {Client, Collection, MessageEmbed} = require("discord.js");

module.exports.run = async(client, message, args) => {
    var woord = `!b2`
    if(message.content.includes(woord)){
        message.delete({timeout: 0});
    }
    var channel = client.channels.cache.get("734876105860841593")
    if(message.author.id === "402426236581969920") {
        var bericht = new MessageEmbed()
            .setTitle(`Hei! Mitä mieltä olet nuori mies?`)
            .setAuthor(`Alivieska Support Rules`, `https://i.imgur.com/Ru0Szpj.png`)
            .setDescription(`

            ***How it works.***
            Below are the punishments that you can recieve if you break the rules.
            You recieve a level based on the rule you broke and the context around it. After a reset period players with the level **V** will be un-banned after creating a un-ban ticket. (*if this is approved*)

            ***Rules***

            **1.** Creating tickets in mass is not allowed. This is considerd *spam*.
            **2.** Create a ticket in the correct category. Otherwise your ticket will be.
            **3.** Evidence must be handed in via Youtube or Streamables.
            **4.** If you don't answer your ticket within 48 hours, your ticket will be closed.
            **5.** Staff has the final word in a ticket.
            **6.** Creating a ticket for losing in-game items is not allow.*
            **7.** Common rules apply to the tickets, read them in the discord-rules channel.


            ***Consequences***
            *Consequences can change on staff request, because context can change the punishment.*

            III*, IV* en V*: Bans only count for the server.
            `)
            .setColor(`BLUE`)
            .addFields(
                {name: `I`, value: `Warning`, inline: true},
                {name: `II`, value: `1 week mute`, inline: true},
                {name: `III`, value: `Ban* / Kick / 2 week mute`, inline: true},
                {name: `IV`, value: `Ban* / Kick`, inline: true},
                {name: `V`, value: `Ban*`, inline: true},
                {name: `VI`, value: `Global ban on all servers`, inline: true}
            )
            .setFooter(`Alivieska Roleplay`)

            if(channel) channel.send(bericht);
            if(!channel) return;
    }else{
        message.delete({timeout:0})
    }
}

module.exports.help = {
    name: "b2"
}