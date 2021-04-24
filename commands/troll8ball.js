const Discord = require("discord.js");

module.exports = {
  nombre: "7ball",

  
  run: async (client, message, args) => {
  const invite = new Discord.MessageEmbed()
  .setTitle("error 7ball")
  .setColor("RANDOM")
  .addField(":x: oh no no se  pudo ejecutar 7ball", "⠀")
  .setTimestamp()
          .setFooter(`Pedido por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(invite);
}
  }