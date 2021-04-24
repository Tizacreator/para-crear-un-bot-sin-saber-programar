//constantes//
const db = require('quick.db');
const Discord = require("discord.js");
const { default_prefix } = require('./config.json')
const client = new Discord.Client();

const fs = require("fs");

//central//
client.commands = new Discord.Collection();
client.aliasComm = new Discord.Collection();

let archivos = fs.readdirSync("./commands").filter(f => f.endsWith(".js"));

archivos.forEach(archivo => {
  let comando = require("./commands/" + archivo);
  client.commands.set(comando.nombre, comando);
  client.aliasComm.set(comando.alias, comando);
});

//presencia//
client.on("ready", () => {
  console.log(`[ API ] Estoy encendido y soy  ${client.user.tag} :)`)
  let statuses = [`pers de tu bot`, `pers de tu bot`, `pers de tu bot`, `pers de tu bot""`];
  setInterval(() => {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setPresence({ 
      status: 'online',
      activity: {
        name: status,
        type: 'PLAYING'
      }
    });
  }, 30000)
})

//definicion message//
client.on('message', async(message) => {
if (message.author.bot) return;
  if (message.channel.type === 'dm') return;
  let prefix = await db.get(`prefix_${message.guild.id}`);
  if (prefix === null) prefix = default_prefix;
  const args = message.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();
  const cmd = client.commands.get(command) || client.aliasComm.get(command);

 if(cmd) {
    cmd.run(client, message, args)
  }
});

//token//
client.login("token de tu bot");

const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 let port = process.env.PORT || 3000;
app.listen(port)
 
require('dotenv').config()

