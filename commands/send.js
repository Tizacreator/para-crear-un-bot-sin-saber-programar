//Hacerlo con embed
module.exports = {
    nombre: "send",
    alias: "snd",
    run: async (client, message, args) => {
      if (!message.member.permissions.has("MANAGE_MESSAGES"))
        return message.channel.send("**No tienes permisos.**");
      let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]);
      if (!user)
        return message.channel.send(
          `**Menciona del usuario al que quieres que le envie el md.**`
        );
      if (!args.slice(1).join(" "))
        return message.channel.send("**Pon el mensaje...**");
      user.user
        .send(args.slice(1).join(" "))
        .catch(() => message.channel.send("**El usuario tiene desahbiitado los md/dm**"))
        .then(() => message.channel.send(`**MD enviado a  ${user.user.tag}**`));
    },
  };