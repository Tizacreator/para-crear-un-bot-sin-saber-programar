const Discord = require('discord.js')

module.exports = {
    nombre: "clear",
    alias: "ke",
    run: async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGE")) return message.channel.send("No tienes permisos para utilizar ese comando")
        if(!args[0]) return message.channel.send("Necesitas colocar el numero de mensajes que quieres eliminar")
        let number = args[0]
        if(isNaN(number)) return message.channel.send("Necesitas colocar un numero no letras")
        number = parseInt(number)
        if(number >= 100000 || number <= 0) return message.channel.send("El valor es invalido")
        message.channel.bulkDelete(number + 1 ).then( () => {
          message.channel.send(`Se elimino ${number} mensajes`)
        }).catch(error => {
          message.channel.send(`Ocurrio un error: ${error.message}`)
        });
    }
}