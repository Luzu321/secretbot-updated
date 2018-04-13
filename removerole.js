const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("You Must Have The Admin/Staff Role To Use !removerole.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Couldn't Find Gay User!");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify The Role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't Find That Role!");

  if(!rMember.roles.has(gRole.id)) return message.reply("They Haven't Got This Role Already!");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`${gRole.name} Role, Has Been Removed From <@${rMember.id}>.`);
  }catch(e){
    message.channel.send(`<@${rMember.id}>, We Removed <@${rMember.id}>, ${gRole.name} Role From Them.`)
  }
}

module.exports.help = {
  name: "removerole"
}
