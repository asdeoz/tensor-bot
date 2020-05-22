const rollCmd = '/r';
const isRollCmdRegex = /^\/r/;
const rollValidRegex = /^\/r\d{1,3}d\d{1,2}([\+\-]{1}\d{1,2})?$/; // Format: /r1d1+1
const rollGrabRegex = /\/r(\d{1,3})d(\d{1,2})(?=[\+\-]{1}\d{1,2})?/;

const cleanString = string => (string.replace(/\s/g, ''));
const roll = (times, sides, modifier) => (times * (Math.trunc(Math.random() * (sides || 6)) + 1) + (modifier || 0));

const roller = {
    getRollCmd: () => (rollCmd),
    isRollCmd: command => (isRollCmdRegex.test(cleanString(command))),
    isRoll: command => (rollValidRegex.test(cleanString(command))),
    roll: command => {
        const cc = cleanString(command);
        const values = cc.split(rollGrabRegex).filter(Boolean);
        if (values.length < 2) return 'Not enough parameters were passed.';
        return `Roll for ${command}: ${roll(+values[0], +values[1], values.length > 2 ? +values[2] : 0)}`;
    },
};

module.exports = roller;