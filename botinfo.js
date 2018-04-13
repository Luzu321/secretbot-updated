const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      let bicon = bot.user.displayAvatarURL;
      let botembed = new Discord.RichEmbed()
      .setDescription("Bot Infomation")
      .setColor("#f45342")
      .setThumbnail(bicon)
      .addField("Bot Name:", bot.user.username)
      .addField("Created On:", bot.user.createdAt);

 message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}
