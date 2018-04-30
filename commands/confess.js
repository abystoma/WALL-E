exports.run = function(client, message, args) {
if (message.channel.type !== 'dm') return;
if (message.guild.id !== '235884708121149441') return;
console.log(`${message.author.username} ${message.createdAt}`)
client.channels.get('291173753419857920').sendMessage(`**Confession:**\n${args}`);

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'confess',
  description: 'Confess anonymously through a bot',
  usage: 'confess'
};
