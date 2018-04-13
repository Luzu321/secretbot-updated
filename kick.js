const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      let kUser = message.guild.member(message.mentions.users.first() || message.guild.get(args[0]));
      if(!kUser) message.channel.send("Can't Find Gay User!");
      let kReason = args.join(" ").slice(22);
      if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You Need The Admin/Staff Role To Be Able To Use !Kick.");
      if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("You Cannot Kick This User!");

      let kickEmbed = new Discord.RichEmbed()
      .setDescription("~Kick~")
      .setColor("#ed1b00")
      .setField("Kicked User:", `${kUser} with ID ${kUser.id}`)
      .addField("Kicked By:", `<@${message.author.id}> with ID ${message.authot.id}`)
      .addField("Kicked In:", message.channel)
      .addField("Time:", message.createdAt)
      .addField("Reason:", kReason);

      let kickChannel = message.guild.channels.find(`name`, "kicks-bans");
      if(!kickChannel) return message.channel.send("Can't Find Kicks And Bans Channel.");

      message.guild.member(kUser).kick(kReason);
      message.delete().catch(O_o=>{});
      kickChannel.send(kickEmbed);
}

module.exports.help = {
  name:"kick"
}
