const Discord = require('discord.js');
exports.run = (client, message, args) => {
const moment = require('moment')
require("moment-duration-format");
const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
const statusembed = new Discord.RichEmbed()

.setColor(0xC7C6C5)
.setDescription(`📝 **${client.user.username} Statistics**`)
.setThumbnail(client.user.displayAvatarURL)
.addField("❯General Stats",`
•Guilds: ${client.guilds.size}
•Users: ${client.guilds.map(guild => guild.memberCount).reduce((a, b) => a + b)}
•Channels: ${client.channels.size}
\u200B
`,true)

.addField("❯Process Info",`
•Uptime: ${moment.duration(client.uptime, 'ms').format('d [days] h [hrs] mm [mins] ss [secs]')}
•Memory: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
•DiscordJS: v${require("discord.js").version}
\u200B
`,true)
.setTimestamp()
.setFooter('Wall-E','https://cdn.discordapp.com/avatars/256876014683029504/c7b0f21368c92ffc279b85619518572b.jpg?size=');

message.channel.sendEmbed(statusembed)

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'stats',
  description: 'Displays the statistics of the bot.',
  usage: 'stats'
};
