module.exports = (client) => {
   
    client.user.setActivity("");

    const statusList = [
        'comandos para sua diversão. Meu prefixo é "!".',
        "diversão para "+client.users.size+" usuários.", 
        "diversão em "+client.guilds.size+" servidores."
        ];

        client.user.setActivity(statusList[0], { type: "STREAMING", url: "https://twitch.tv/foxzsfn" });

        setInterval(() => {
            const index = Math.floor(Math.random() * (statusList.length - 1) + 1);
            client.user.setActivity(statusList[index], { type: "STREAMING", url: "https://twitch.tv/foxzsfn" });    
        }, 3000);

  };