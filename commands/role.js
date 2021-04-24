const Discord = require("discord.js");

module.exports = {
  nombre: "nitro",

  
  run: async (client, message, args) => {
  const invite = new Discord.MessageEmbed()
  .setTitle("f")
  .setColor("RANDOM")
  .addField("nitro https://discord.com/gifts/WqF7Na8nDxgAhmJB distrutalo", "⠀")
  .setTimestamp()
          .setFooter(`Pedido por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(invite);
}
  }