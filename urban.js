const Discord = module.require("discord.js");
const urban = module.require("urban");

module.exports.run = async (bot, message, args) => {
  if(args.length < 1) return message.channel.send("Please Enter The Word You Want The Definition For!");
    let str = args.join(" ");

    urban(str).first(json => {
      if(!json) return message.channel.send("There Are No Results Found For This Word!");

let urbanembed = new Discord.RichEmbed()
.setTitle(json.word)
.setDescription(json.definition)
.setColor("#f45342")
.addField("Upvotes", json.thumbs_up, true)
.addField("Downvotes", json.thumbs_down, true)
.setFooter(`Written By ${json.author}`);

message.channel.send(urbanembed);
    });
}

module.exports.help = {
  name: "urban"
}
