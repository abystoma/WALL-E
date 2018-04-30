const Discord = require("discord.js");

exports.run = function(bot, msg, args) {
  var code = args.join(" ");
  if (msg.author.id !== '232217294003109888') return;

  try {
      var evaled = eval(code);
      if (typeof evaled !== 'string')
        evaled = require('util').inspect(evaled);
      msg.channel.sendMessage("```xl\n" +
      clean(evaled) +
      "\n```"
      );
  }
  catch(err) {
      msg.channel.sendMessage("`ERROR` ```xl\n" +
      clean(err) +
      "\n```");
  }
};
function clean(text) {
  if (typeof(text) === "string") {
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  }
  else {
      return text;
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'eval',
  description: 'Evaluates arbitrary Javascript',
  usage: 'eval'
};
