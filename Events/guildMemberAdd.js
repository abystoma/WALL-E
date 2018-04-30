module.exports = member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Welcome ${member.user.username} to the server! Make sure to have a good time here :wink:`);
};
