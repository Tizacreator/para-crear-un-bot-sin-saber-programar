const Discord = require('discord.js')

module.exports = {
	nombre: 'formatear',
	alias: 'frt',

	run: async (client, message, args) => {
		let mensaje = args.slice().join(" ")
		const noquestion = new Discord.MessageEmbed()
			.setDescription(`| Tienes que poner una razon`)
			.setColor('RAMDOM')
		if (!mensaje) return message.channel.send(noquestion);
		let respuestas = ["Me he Formateado, ahora soy más burro que antes","Me he Formateado con exitó","Error 404","No me puedo formatear porque tu eres putito ok no, -.-"
]
		const troll = new Discord.MessageEmbed()
			.addField("Razon", `${mensaje}`)
			.addField("Formateo", `${respuestas[(Math.floor(Math.random() * respuestas.length))]}`)
			.setColor("RAMDOM")
	message.channel.send(troll)
	}
}