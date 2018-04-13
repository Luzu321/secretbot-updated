const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let staffhelpembed = new Discord.RichEmbed()
    .setDescription("~Staff Commands~")
    .setColor("#f45342")
    .addField("!staffhelp", "Shows A List Of Staff Commands.")
    .addField("!kick", "Kicks Member/s.")
    .addField("!ban", "Bans member/s.")
    .addField("!mute", "Mutes Member For Specific Amount Of Time.")
    .addField("!addrole", "Gives User The Role Specified.")
    .addField("!removerole", "Removes Specified Role From User.")
    .addField("!purge", "Clears/Purges Amount Of Messages Specified.")
    .addField("!say", "Makes Bot Say Text Specified.");

message.channel.send(staffhelpembed);
}

module.exports.help = {
  name:"staffhelp"
}
