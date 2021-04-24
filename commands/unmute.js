const Discord = require('discord.js');

module.exports = {
  nombre: 'unmute',
  alias: 'nossh',

  run: async (client, message, args) => {
   const rol = message.guild.roles.cache.find(r => r.name === "Muted")

  const usuario = message.mentions.members.first() 
  const razon = args.slice(1).join(" ") 

  if (!message.member.hasPermission("MUTE_MEMBERS")) return;  //Los permisos (tambien se pueden cambiar) estos son los permisos que hay https://discord.js.org/#/docs/main/stable/class/Permissions
  if (!usuario) return message.channel.send("**[FAVOR INGRESA UN USUARIO]**") // Retorna si no menciono a un usuario

  const embed = new Discord.MessageEmbed() //mensaje embed
 .setColor("RANDOM") //color
 .setTitle("**Tizawey | UNMUTE**") //titulo
 .addField("Usuario", `${usuario.displayName} `) //el usuario que se le quito
 .addField("Moderador", `${message.member.displayName}`) //el moderador que se lo quito
 .setTimestamp()
 .setThumbnail("https://cdn.discordapp.com/attachments/813437892423843851/832347559514734592/1617818512697.jpg")
 .setAuthor("Moderador") //el moderador (es como titulo) 
 .setFooter(+message.guild.name, message.guild.iconURL()) //el icono del moderador
 message.channel.send(embed)
 usuario.roles.remove(rol)
  }
}
