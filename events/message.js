module.exports= async (client, message)=> {

    if(message.guild==null && !message.author.bot && client.cArray.has(message.author.id)) {

        
        var result = client.cArray.get(message.author.id);
        var userAwnser = parseInt(message.content);
        var guild = client.guilds.get(client.cfg.GUILD_ID);
        var member = guild.members.get(message.author.id);
        if(result == userAwnser){

            member.user.send({
                "embed": {
                  "title": ":lock: | Sistema de verificação de robôs",
                  "description": "Você passou na verificação e foi liberado para falar em nosso servidor!",
                  "color": 15158332,
                  "timestamp": "2019-05-29T20:29:19.697Z",
                  "footer": {
                    "icon_url": "https://pbs.twimg.com/profile_images/808364933796786176/lOa6TA18_400x400.jpg",
                    "text": "Todos direitos reservados, BattleBits | © 2015 - 2019"
                  }
                }
              });

              member.addRole(guild.roles.get(client.cfg.MEMBER_ROLE));
              client.cArray.remove(member.user.id);

        } else {

            await member.user.send({
                "embed": {
                  "title": ":lock: | Sistema de verificação de robôs",
                  "description": "Você falhou na verificação e foi kickado do nosso servidor, para continuar, entre novamente no nosso Discord.",
                  "color": 15158332,
                  "timestamp": "2019-05-29T20:29:19.697Z",
                  "footer": {
                    "icon_url": "https://pbs.twimg.com/profile_images/808364933796786176/lOa6TA18_400x400.jpg",
                    "text": "Todos direitos reservados, BattleBits | © 2015 - 2019"
                  }
                }
              });
            await guild.members.get(message.author.id).kick().then( member => {});
        }
            
        return;
    }

    if(message.guild==null && !message.author.bot && client.sArray.has(message.author.id)) {

        client.guilds.get(client.cfg.GUILD_ID).channels.get(client.cfg.SUGGESTION_CHAT).send( {
            "embed": {
                "title": "💡 | Sugestão", "color": 15158332, "timestamp": new Date(), "footer": {
                    "icon_url": "https://pbs.twimg.com/profile_images/808364933796786176/lOa6TA18_400x400.jpg", "text": "Todos direitos reservados, BattleBits | © 2015 - 2019"
                }
                , "fields": [ {
                    "name": "Usuário que enviou:", "value": message.author.toString(), "inline": true
                }
                ,{
                    "name": "Sugestão tipo:", "value": client.sArray.get(message.author.id), "inline": true
                }
                , {
                    "name": "Descrição da sugestão:", "value": message.content, "inline": true
                }
                , ]
            }
        }
        ).then( msg => {
                
            msg.react('✅');
            msg.react('❌');

            message.author.send({
                "embed": {
                  "title": "💡 | Formulário de Sugestão",
                  "description": "Sugestão enviada!",
                  "color": 15158332,
                  "timestamp": new Date(),
                  "footer": {
                    "icon_url": "https://pbs.twimg.com/profile_images/808364933796786176/lOa6TA18_400x400.jpg",
                    "text": "Todos direitos reservados, BattleBits | © 2015 - 2019"
                  },
                }});
        })  ;
        return;
    }
}

;