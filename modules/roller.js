const rollCmd = '/r';
const isRollCmdRegex = /^\/r/;
const rollValidRegex = /^\/r\d{1,3}d\d{1,2}([\+\-]{1}\d{1,2})?$/; // Format: /r1d1+1
const rollGrabRegex = /\/r(\d{1,3})d(\d{1,2})(?=[\+\-]{1}\d{1,2})?/;

const cleanString = string => (string.replace(/\s/g, ''));
const getRolls = (times, sides) => (Array(times).fill(times).map(_ => Math.trunc(Math.random() * (sides || 6)) + 1));
const roll = (rolls, modifier) => (rolls.reduce((p, c) => p + c) + (modifier || 0));

const roller = {
    getRollCmd: () => (rollCmd),
    isRollCmd: command => (isRollCmdRegex.test(cleanString(command))),
    isRoll: command => (rollValidRegex.test(cleanString(command))),
    roll: command => {
        const cc = cleanString(command);
        const values = cc.split(rollGrabRegex).filter(Boolean);
        if (values.length < 2) return 'Not enough parameters were passed.';
        const rolls = getRolls(+values[0], +values[1]);
        let result = `Roll for ${command}: **[${rolls}]`;
        const mod = values.length > 2 ? +values[2] : 0;
        if (mod) result += ` ${mod > 0 ? '+' + mod : mod}`;
        result += `**\nResult: **${roll(rolls, mod)}**`
        return result;
    },
};

module.exports = roller;