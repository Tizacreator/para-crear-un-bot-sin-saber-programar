const Discord = require("discord.js");

module.exports = {
  nombre: "support",

  
  run: async (client, message, args) => {
  const invite = new Discord.MessageEmbed()
  .setTitle("f")
  .setColor("RANDOM")
  .addField("lo siento no tengo soporte", "⠀")
    .addField("I'm sorry, I don't have support", "⠀")
  .setTimestamp()
          .setFooter(`Pedido por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(invite);
}
  }