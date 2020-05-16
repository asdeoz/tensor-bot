const helper = {
  bowlHelp: (botName) => {
    return
      `The available options are:\n` +
      `- ${botName}add to add a die in the bowl.\n` +
      `- ${botName}addandroll to add a die and immediately roll.\n` +
      `- ${botName}roll to roll all the dice in the bowl and empty it.\n` +
      `- ${botName}check to check the number of dice in the bowl.\n` +
      `- ${botName}empty to empty the bowl.\n` +
      `- ${botName}help to see this help text.`;
  },
};

module.exports = helper;
