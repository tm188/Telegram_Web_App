const { Telegraf } = require("telegraf");
const TOKEN = "5322055095:AAF5Yi66nn8-rTeygijXZCZ8vnXKbQAWeJs";
const bot = new Telegraf(TOKEN);

const web_link = "https://telegshop.com/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
