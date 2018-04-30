exports.run = (client, message, args) => {
var result = args.join(' ');

if (!result) {
result = null;
}
client.user.setGame(result);
message.channel.sendMessage(':thumbsup:');
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'setgame',
  description: 'Changes the game status of the bot',
  usage: 'setgame'
};
