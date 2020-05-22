const helper = {
  bowlHelp: bowlCmd => (
    `Mr.T here! The available options are:\n` +
    `- ${bowlCmd}add to add a die in the bowl.\n` +
    `- ${bowlCmd}addandroll to add a die and immediately roll.\n` +
    `- ${bowlCmd}roll to roll all the dice in the bowl and empty it.\n` +
    `- ${bowlCmd}check to check the number of dice in the bowl.\n` +
    `- ${bowlCmd}empty to empty the bowl.\n` +
    `- ${bowlCmd}help to see this help text.`
  ),
  rollHelp: rollCmd => (
    `Mr.T here! The available options are:\n` +
    `- ${rollCmd}xdy+z to roll x dice of y sides and add or subtract z modifier.`
  ),
};

module.exports = helper;
