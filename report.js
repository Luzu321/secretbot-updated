const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.get(args[0]));
  if(!rUser) return message.channel.send("Couldn't Find Gay User.");
  let reason = args.join(" ").slice(22);

  let reportEmbed = new Discord.RichEmbed()
  .setDescription("Reports")
  .setColor("#f45342")
  .addField("Reported User:", `${rUser} with ID: ${rUser.id}`)
  .addField("Reported By:", `${message.author} with ID: ${message.author.id}`)
  .addField("Channel:", message.channel)
  .addField("Time Reported:", message.createdAt)
  .addField("Reason:", reason);


  let reportschannel = message.guild.channels.find(`name`, "warned");
  if(!reportschannel) return message.channel.send("Couldn't Find Reports Channel.");

   message.delete().catch(O_o=>{});
   reportschannel.send(reportEmbed);
}

module.exports.help = {
  name: "report"
}
