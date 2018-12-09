const Discord = require('discord.js'),
    client = new Discord.Client({sisableEveryone: true})
    console.log("muuuuuuuuute,");
client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("521046158987100170");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`** Welcome To ToP Server :herb: :hearts:**`), 4000)        
}
});
client.on('message', msg => {

    if (msg.content == '$join') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join().then(msg.react('white_check_mark'));
     }
    }
}
})
client.on('ready', () => {
    client.channels.get("521057011274874881").join(); 
    });

client.login(process.env.TOKEN);