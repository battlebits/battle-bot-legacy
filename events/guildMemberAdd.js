module.exports = (client, member) => {
   
    var guild = member.guild;
    member.addRole(guild.roles.get(client.cfg.REGISTERING_ROLE));

    var number1 = Math.floor(Math.random() * 10);
    var number2 = Math.floor(Math.random() * 10);

    var result = number1 + number2;

    client.cArray.set(member.user.id, result);

    member.user.send({
        "embed": {
          "title": ":lock: | Sistema de verificação de robôs",
          "description": "Olá, "+member.displayName+". \n\nPara verificarmos que você não é um robô, resolva a seguinte operação abaixo:\n\n``"+number1+" +  "+number2+" = ??`` \n\nApós isso você será liberado para falar em nosso servidor.",
          "color": 15158332,
          "timestamp": "2019-05-29T20:29:19.697Z",
          "footer": {
            "icon_url": "https://pbs.twimg.com/profile_images/808364933796786176/lOa6TA18_400x400.jpg",
            "text": "Todos direitos reservados, BattleBits | © 2015 - 2019"
          }
        }
      });

};