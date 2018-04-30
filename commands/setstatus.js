exports.run = (client, message, args) => {
var result = args.join(' ');

if (!result) {
result = 'online';
}
client.user.setStatus(result);
message.channel.sendMessage(':thumbsup:');
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'setstatus',
  description: 'Changes the online status of the bot',
  usage: 'setstatus'
};
