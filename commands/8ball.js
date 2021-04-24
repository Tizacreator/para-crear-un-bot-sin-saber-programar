const Discord = require('discord.js')

module.exports = {
	nombre: '8ball',
	alias: '8b',

	run: async (client, message, args) => {
		let mensaje = args.slice().join(" ")
		const noquestion = new Discord.MessageEmbed()
			.setDescription(`| Tienes que hacer una pregunta.`)
			.setColor('RAMDOM')
		if (!mensaje) return message.channel.send(noquestion);
		let respuestas = ["En mi opinion, si","Es cierto","Es decididamente asi","Probablemente","Todo apunta a que si","Sin duda","Si","Si - definitivamente","Respuesta vaga, vuelve a intentarlo","Pregunta en otro momento","Sera mejor que no te lo diga ahora","No puedo predecirlo ahora","Concentrate y vuelve a preguntar","Puede ser","No cuentes con ello","Mi respuesta es no","Mis fuentes me dicen que no","Las perspectivas no son buenas","Muy dudoso","¡Claro Que sí!"
]
		const ball = new Discord.MessageEmbed()
			.addField("Pregunta", `${mensaje}`)
			.addField("Respuesta", `${respuestas[(Math.floor(Math.random() * respuestas.length))]}`)
			.setColor("RAMDOM")
	message.channel.send(ball)
	}
}
	
