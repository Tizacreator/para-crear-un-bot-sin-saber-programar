const Discord = require("discord.js");

module.exports = {
  nombre: "invite",
  alias: "inv",

  run: async (client, message, args) => {
  const invite = new Discord.MessageEmbed()
        .setTitle("Invitar a Tizawey a tu servidor")
        .setDescription("Para añadirme a tu servidor  \n [Click Aqui](https://discord.com/api/oauth2/authorize?client_id=825491151246983188&permissions=0&scope=bot)")
        .setColor("RANDOM")
        .setTimestamp()
        .setThumbnail("https://cdn.discordapp.com/attachments/813437892423843851/832347559514734592/1617818512697.jpg")
        .setFooter(`Comando ejecutado por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(invite);
}
  }
