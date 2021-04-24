const Discord = require("discord.js");

module.exports = {
  nombre: "help",
  alias: "h",

  run: async (client, message, args) => {
  const invite = new Discord.MessageEmbed()
        .setTitle("Tizawey | Comandos")
        .setDescription("Gracias por usar Tizawey")
        .setColor("RANDOM")
        .addField("Moderación:t!mute | t!unmute | t!clear", "⠀")
        .addField("Diverción:t!8ball | t!formatear create by arceni y TizaShadownesszZ", "⠀")
        .addField("Mensajeria:t!send", "⠀")
        .setTimestamp()
        .setThumbnail("https://cdn.discordapp.com/attachments/813437892423843851/832347559514734592/1617818512697.jpg")
        .setFooter(`Pedido por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(invite);
}
  }