const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("You Must Have The Admin/Staff Role To Use !addrole.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Couldn't Find Gay User!");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify The Role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't Find That Role!");

  if(rMember.roles.has(gRole.id)) return message.reply("They Already Have This Role!");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`<@${rMember.id}> Has Been Given The Role ${gRole.name}.`)
  }catch(e){
    message.channel.send(`<@${rMember.id}> Has Been Given The Role "${gRole.name}".`)
  }
}

module.exports.help = {
  name: "addrole"
}
