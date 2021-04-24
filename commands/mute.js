const Discord = require('discord.js');

module.exports = {
  nombre: 'mute',
  alias: 'silencio',

  run: async (client, message, args) => {
    const rol = message.guild.roles.cache.find(r => r.name ==="Muted") //le dice que busque un rol llamado "Muted" 

    const usuario = message.mentions.members.first() //La menciones
    const razon = args.slice(1).join(" ") //la razon despues de la mencion

	      if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send('No tienes permisos');
    }
 
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send('No tengo permisos');
    }
        
           if (!usuario) return message.channel.send("**Usar haci: t!mute <Usario> <Razon>**") 
    if (!razon) return message.channel.send("**Ingresa una razon**") //Retorna si no ingresa una razon

    let embed = new Discord.MessageEmbed() 
   .setColor("GREEN") 
   .setTitle("**Tizawey | MUTE**") 
   .addField("Usuario", `${usuario.displayName}`) //el usuario y su apodo
   .addField("Moderador", `${message.member.displayName}`) //el moderador
   .setTimestamp() //el tiempo
   .setAuthor("MODERADOR") //el autor
   .setThumbnail("https://cdn.discordapp.com/attachments/813437892423843851/832347559514734592/1617818512697.jpg")
   .setFooter(+message.guild.name, message.guild.iconURL()) //El nombre del usuario y su icono
   .addField("MOTIVO", razon) //El motivo (razon)
   .setThumbnail(usuario.user.displayAvatarURL()) //El tiempo lo agrega aqui y el avatar 
   message.channel.send(embed) //Le dice que mande el mensaje al canal 
  usuario.roles.add(rol)

  }
}