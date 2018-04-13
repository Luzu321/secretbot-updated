const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      let ugayEmbed = new Discord.RichEmbed()
      .setDescription("No u")
      .setColor("#f45342")
      .addField("Anti Reflect", ".")
      .addField("No Shields", ".")
      .addField("No Reverse", ".")
      .addField("Hahahah Get Rekt Boi", ".");

      message.channel.send(ugayEmbed);
}

module.exports.help = {
  name:"ugay"
}
