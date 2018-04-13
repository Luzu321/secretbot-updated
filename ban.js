const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      let bUser = message.guild.member(message.mentions.users.first() || message.guild.get(args[0]));
      if(!bUser) message.channel.send("Can't Find Gay User!");
      let bReason = args.join(" ").slice(22);
      if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You Need The Admin/Staff Role To Be Able To Use !Ban.");
      if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("You Cannot Ban This User!");

      let banEmbed = new Discord.RichEmbed()
      .setDescription("~Banned~")
      .setColor("#ed1b00")
      .setField("Banned User:", `${bUser} with ID ${bUser.id}`)
      .addField("Banned By:", `<@${message.author.id}> with ID ${message.authot.id}`)
      .addField("Banned In:", message.channel)
      .addField("Time:", message.createdAt)
      .addField("Reason:", bReason);

      let banChannel = message.guild.channels.find(`name`, "kicks-bans");
      if(!banChannel) return message.channel.send("Can't Find Kicks And Bans Channel.");

      message.guild.member(bUser).ban(bReason);
      message.delete().catch(O_o=>{});
      banChannel.send(banEmbed);
}

module.exports.help = {
  name:"ban"
}
