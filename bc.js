const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "x";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : ADAM`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : ADAM ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`xBc - ✖ Crew. `,"http://twitch.tv/adam")
client.user.setStatus("dnd")
});



client.login("NTE2MjU4MzMxMTc0ODk1NjI3.DtxDLA.S8Ty6M71LQz4mLvN6MW6i-ny_i8");