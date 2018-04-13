const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let helpembed = new Discord.RichEmbed()
    .setDescription("~Commands~")
    .setColor("#f45342")
    .addField("!help", "Shows The Commands In A Embeded Message.")
    .addField("!ugay", "Unleash The Wrath Of MinBucks Bot!")
    .addField("!report", "Reports User. This Is Used For Reporting Users Doing Something So If A Staff Member Doesn't See What They Did It Will Be Reported.")
    .addField("!8ball", "Ask 8ball A Question And See What Answer It Gives!")
    .addField("!weebism . . ?", "Find Out How Much Of A Weeb You Are!");

message.channel.send(helpembed);
}

module.exports.help = {
  name:"help"
}
