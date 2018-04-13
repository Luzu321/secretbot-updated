const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   if(!args[2]) return message.reply("Please Ask A Full Question!");
   let replies = ["Yes.", "Likely", "Unclear", "Unlikely", "No"];

   let result = Math.floor((Math.random() * replies.length));
   let question = args.slice(0).join(" ");

   let ballembed = new Discord.RichEmbed()
   .setAuthor(message.author.tag)
   .setColor("#f45342")
   .addField("Question:", question)
   .addField("Answer:", replies[result]);

   message.channel.send(ballembed);
}

module.exports.help = {
  name:"8ball"
}
