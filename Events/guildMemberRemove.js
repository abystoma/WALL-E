module.exports = member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Farewell ${member.user.username} we will miss you!`);
};
