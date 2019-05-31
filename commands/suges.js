const Discord = require("discord.js");

module.exports.run = async (client, message, args, suggestionArray) => {

  try {
    await message.channel.send(message.author, {
      "embed": {
        "title": "``💡`` | Formulário de Sugestão",
        "description": "Enviamos para você, no privado, as intruções para prosseguir com a sugestão.",
        "color": 15158332,
        "timestamp": new Date(),
        "footer": {
          "icon_url": "https://pbs.twimg.com/profile_images/808364933796786176/lOa6TA18_400x400.jpg",
          "text": "Todos direitos reservados, BattleBits | © 2015 - 2019"
        },
      }
    });
    await message.author.send({
      "embed": {
        "title": "💡 | Formulário de Sugestão",
        "description": "Para prosseguir com a sugestão, reaja a essa mensagem com ``🎮`` para sugestão **in-game** ou com ``💬`` para sugestões para o **discord**.",
        "color": 15158332,
        "timestamp": new Date(),
        "footer": {
          "icon_url": "https://pbs.twimg.com/profile_images/808364933796786176/lOa6TA18_400x400.jpg",
          "text": "Todos direitos reservados, BattleBits | © 2015 - 2019"
        },
      }
    }).then(async msg => {
      await msg.react('🎮');
      await msg.react('💬');
      const filter = (reaction, user) => user.id === message.author.id;
      const collector = msg.createReactionCollector(filter, { time: 15000 });
      collector.on('collect', r => {
        if(r.emoji.name === '🎮' || r.emoji.name === '💬') {
          var author = message.author;
          var member = message.member;
          collector.stop();
          var response = r.emoji.name === '🎮' ? 'in-game' : 'discord';
          suggestionArray.set(message.author.id, response);
          await message.author.send({
            "embed": {
              "title": "💡 | Formulário de Sugestão",
              "description": "Você escolheu ``" + response + "``, agora descreva sua sugestão.",
              "color": 15158332,
              "timestamp": new Date(),
              "footer": {
                "icon_url": "https://pbs.twimg.com/profile_images/808364933796786176/lOa6TA18_400x400.jpg",
                "text": "Todos direitos reservados, BattleBits | © 2015 - 2019"
              },
            }
          });
        }
      });
    });
  } catch (err) {
    message.reply("não consegui enviar mensagens no privado, DM bloqueado.");
  }

}
