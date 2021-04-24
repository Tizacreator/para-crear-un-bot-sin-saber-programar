const Discord = require("discord.js");

module.exports = {
  nombre: "vercion",
  alias: "vercion",

  run: async (client, message, args) => {
  const vercion = new Discord.MessageEmbed()
        .setTitle("***vercion mas viejo***")
        .setColor("RANDOM")
        .addField("***vercion mas vieja 0.0.0 2021***", "⠀")
        .addField("***Proxima Versión:0.0.1 2021***", "⠀")
        .addField("***chupartelo***", "⠀")
        .addField("***Versión Beta:si hay***", "⠀")
        .setTimestamp()
        .setThumbnail("https://cdn.discordapp.com/attachments/829842223549906956/832353846851796992/Sin_titulo_23.jpg")
        .setFooter(`Pedido por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(vercion);
}
  }