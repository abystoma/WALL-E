exports.run = function(client, message, args) {

const answers = ["Maybe.",
"Certainly not.",
"I hope so.",
"Not in your wildest dreams.",
"There is a good chance.",
"Quite likely.",
"I think so.",
"I hope not.",
"I hope so.",
"Never!",
"Fuhgeddaboudit.",
"Ahaha! Really?!?",
"Pfft.",
"Sorry, bucko.",
"Hell, yes.",
"Hell to the no.",
"The future is bleak.",
"The future is uncertain.",
"I would rather not say.",
"Who cares?",
"Possibly.",
"Never, ever, ever.",
"There is a small chance.",
"Yes"]

if (!args[0]) {
message.reply('Argument error, please ask me a question kthx.');
}
else   {
message.reply(`${answers[Math.floor(Math.random() * answers.length)]}`);
  }



 };

 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: [],
   permLevel: 0
 };

 exports.help = {
   name: '8ball',
   description: 'Helps you predict an outcome',
   usage: '8ball'
 };
