const Discord = module.require("discord.js");
const urban = module.require("urban");

module.exports.run = async (bot, message, args) => {
   urban.random().first(json => {

let randomurbanembed = new Discord.RichEmbed()
.setTitle(json.word)
.setDescription(json.definition)
.setColor("#f45342")
.addField("Upvotes", json.thumbs_up, true)
.addField("Downvotes", json.thumbs_down, true)
.setFooter(`Written By ${json.author}`);

message.channel.send(randomurbanembed);
    });
}

module.exports.help = {
  name: "randomurban"
}
