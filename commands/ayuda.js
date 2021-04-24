const Discord = require("discord.js");

module.exports = {
  nombre: "ayuda",

  
  run: async (client, message, args) => {
  const invite = new Discord.MessageEmbed()
  .setTitle("error")
  .setColor("RANDOM")
  .addField(":x: lo siento aqui no puedes ejecutar este comando ejecutalo en comandos", "⠀")
  .setTimestamp()
          .setFooter(`Pedido por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(invite);
}
  }