const helper = {
  bowlHelp: (botName) => {
    return `
      The available options are:
      - ${botName}add to add a die in the bowl.
      - ${botName}addandroll to add a die and immediately roll.
      - ${botName}roll to roll all the dice in the bowl and empty it.
      - ${botName}check to check the number of dice in the bowl.
      - ${botName}empty to empty the bowl.
      - ${botName}help to see this help text.
    `;
  },
};

module.exports = helper;
