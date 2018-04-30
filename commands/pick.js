exports.run = function(client, message, args) {
if (!args[0])
  {
message.reply('Give me some variables to randomly choose for you kthx.');
}

    else {
        let arr = args.join(' ').split(',');
        message.channel.sendMessage(`Random choice result: **${arr[Math.floor(Math.random()*arr.length)]}**`);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'pick',
  description: 'Picks from given random variables',
  usage: 'pick'
};
