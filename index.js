const TelegramBot = require("node-telegram-bot-api")

const TOKEN = "653979602:AAFh07RO6VF5Gx_yq06ZCERG14JbzLn3tAk"

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `Алена суперстар! Бот говорит: "Hi, ${msg.from.first_name}"`)
})