const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   if(!args[2]) return message.reply("Please Ask A Full Question!");
   let replies = ["%1", "%5", "%16", "%19", "%20", "%23", "%34", "%39", "%50", "%62", "%71", "%79", "%84", "%91", "%100", "%3", "%6", "%9", "%10"];

   let result = Math.floor((Math.random() * replies.length));
   let question = args.slice(0).join(" ");

   let ballembed = new Discord.RichEmbed()
   .setAuthor(message.author.tag)
   .setColor("#f45342")
   .addField("Weebism Level:", replies[result]);

   message.channel.send(ballembed);
}

module.exports.help = {
  name:"weebism"
}
