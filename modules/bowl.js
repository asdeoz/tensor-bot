const dice = [];
// Math.trunc(Math.random() * (sides || 6)) + 1
const addDie = (sides) => {
  dice.push(sides);
};

const emptyBowl = () => {
  if (dice && dice.length) {
    dice.splice(0, dice.length);
  }
};

const bowl = {
  getDice: () => dice || [],
  empty: () => {
    emptyBowl();
    return `The bowl is empty!`;
  },
  roll: () => {
    const count = (dice || []).length;
    let message = '';
    if (count) {
      const rolls = dice.map(s => Math.trunc(Math.random() * (s || 6)) + 1);
      message = (
        `Rolling ${count} ${count > 1 ? 'dice' : 'die'}...\n` +
        `Results: [${rolls.join(', ')}].\n` +
        `You rolled ${(rolls.filter(r => r == 1) || []).length} ones!`
      );
    } else {
      message = `The bowl is empty!`;
    }
    if (count >= 6) emptyBowl();
    return message;
  },
  add: (sides) => {
    addDie(sides);
    return `Die added... And that's ${(dice || []).length}.`;
  },
  check: () => {
    const count = (dice || []).length;
    return count ? `There ${count > 1 ? 'are' : 'is'} ${count} ${count > 1 ? 'dice' : 'die'} in the bowl.` : `The bowl is empty!`;
  }
};

module.exports = bowl;
