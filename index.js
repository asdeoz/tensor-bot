require("dotenv").config();
const bowl = require("./modules/bowl");
const helper = require("./modules/helper");
const Discord = require("discord.js");
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

const botName = "/tension";
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
  // Short-circuit if the message does not exist or does not have the bot name in it
  if (!msg.content || !msg.content.startsWith(botName)) return;

  const msgContent = msg.content.toLowerCase();
  const option = actions[msgContent];
  let message = '';

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

  msg.channel.send(message);

  // if (msgContent === `${botName}add`) {
  //   bowl.addDie();
  //   msg.reply(JSON.stringify(bowl.getDice()));
  //   // msg.channel.send('pong');
  // } else if (msg.content.startsWith("!kick")) {
  //   if (msg.mentions.users.size) {
  //     const taggedUser = msg.mentions.users.first();
  //     msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
  //   } else {
  //     msg.reply("Please tag a valid user!");
  //   }
  // }
});
