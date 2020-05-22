require("dotenv").config();
const bowl = require("./modules/bowl");
const roller = require("./modules/roller");
const helper = require("./modules/helper");
const Discord = require("discord.js");
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

const botName = "/tension";
const tensionRegex = /^\/tension/;

const actions = {
  [`${botName}help`]: 1,
  [`${botName}add`]: 2,
  [`${botName}roll`]: 3,
  [`${botName}addandroll`]: 4,
  [`${botName}check`]: 5,
  [`${botName}empty`]: 6,
};

bot.login(TOKEN);

bot.on("ready", () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on("message", (msg) => {
  // Short-circuit if the message does not exist
  if (!msg.content) return;
  const msgContent = msg.content.toLowerCase();
  let message = '';

  if (tensionRegex.test(msgContent)) {
    const option = actions[msgContent];

    switch (option) {
      case 2:
        message = bowl.add();
        const count = bowl.getDice().length;
        if (count >= 6) message += `\n${bowl.roll()}`;
        break;
      case 3:
        message = bowl.roll();
        break;
      case 4:
        message = 
          `${bowl.add()}\n` +
          `${bowl.roll()}`;
        break;
      case 5:
        message = bowl.check();
        break;
      case 6:
        message = bowl.empty();
        break;
      case 1:
      default:
        message = helper.bowlHelp(botName);
        break;
    }
  }

  if (roller.isRollCmd(msgContent)) {
    if (!roller.isRoll(msgContent)) message = helper.rollHelp(roller.getRollCmd());

    message = roller.roll(msgContent);
  }

  if (message) msg.channel.send(message);
});
