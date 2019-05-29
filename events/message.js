module.exports=(client, message)=> {
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