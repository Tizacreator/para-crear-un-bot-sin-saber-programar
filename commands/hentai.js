const Discord = require("discord.js");

module.exports = {
  nombre: "hentai",

  
  run: async (client, message, args) => {
  const invite = new Discord.MessageEmbed()
  .setTitle("aviso")
  .setColor("RANDOM")
  .addField("deves ser +18 para ver hentai", "⠀")
  .setTimestamp()
          .setFooter(`Pedido por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(invite);
}
  }