const botconfig = require("./botconfig.json");
const quoteconfig = require("./quoteconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
let prefix = botconfig.prefix;
let version = botconfig.version;
bot.commands = new Discord.Collection();


fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log(`┌───────────────────────────────┐`);
        console.log("│ Nebyly nalezeny žádné příkazy │");
        console.log(`└───────────────────────────────┘`);

        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`┌────────────────────────┐`);
        console.log(`     ${f} načteno!             `);
        console.log(`└────────────────────────┘`);
        bot.commands.set(props.help.name, props);
    });
})

bot.on("ready", async () =>{
    console.log(`╔═══════════════════════════╗`);
    console.log(`║     ${bot.user.username} je READY!      ║`);
    console.log(`║       ${botconfig.version}          ║`);
    console.log(`╚═══════════════════════════╝`);
    bot.user.setActivity("si v JavaScriptu");
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0]; 
    let args = messageArray.slice(1); 

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);

    if(cmd === `ahoj`){
        return message.channel.send("Hello my friendo!");
    } 
});

var quotes = quoteconfig.quotes;
var command = quoteconfig.command;

var InfiniteLoop = require('infinite-loop');
var il = new InfiniteLoop;
function randomQuote() {
            return quotes[Math.floor(Math.random() * quotes.length)];
};
il.add(randomQuote, []);

il.run();

console.log(randomQuote());

bot.on("message", (message) => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0]; 
    if (cmd === `${prefix}quote`){
      message.channel.sendMessage(randomQuote());
    }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0]; 
    let args = messageArray.slice(1); 

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);

    if (cmd === `Mico`){
        message.channel.sendMessage("Mica tu není ale můžeš mi tu pro něj zanechat vzkaz! :smile:");
      }
    else if (cmd === `mico`){
        message.channel.sendMessage("Mica tu není ale můžeš mi tu pro něj zanechat vzkaz! :smile:");
    }
    else if (cmd === `Mico?`){
        message.channel.sendMessage("Mica tu není ale můžeš mi tu pro něj zanechat vzkaz! :smile:");
    }
    else if (cmd === `mico?`){
        message.channel.sendMessage("Mica tu není ale můžeš mi tu pro něj zanechat vzkaz! :smile:");
    };

    if (cmd === `nečum`){
        message.channel.send({file: "https://i.imgur.com/wnQ8Gc5.png"});
      }
    else if(cmd === "Nečum"){
        message.channel.send({file: "https://i.imgur.com/wnQ8Gc5.png"});
    };

    if (cmd === "ree"){
        message.channel.send({file: "https://i.imgur.com/B8PM9ZP.png"});
    }
    else if(cmd === "reee"){
        message.channel.send({file: "https://i.imgur.com/B8PM9ZP.png"});
    }
    else if(cmd === "reeee"){
        message.channel.send({file: "https://i.imgur.com/B8PM9ZP.png"});
    }
    else if(cmd === "reeeee"){
        message.channel.send({file: "https://i.imgur.com/B8PM9ZP.png"});
    }
    else if(cmd === "reeeeee"){
        message.channel.send({file: "https://i.imgur.com/B8PM9ZP.png"});
    }
    else if(cmd === "reeeeeee"){
        message.channel.send({file: "https://i.imgur.com/B8PM9ZP.png"});
    }
    else if(cmd === "reeeeeeee"){
        message.channel.send({file: "https://i.imgur.com/B8PM9ZP.png"});
    };

    if(cmd == `${prefix}info`){
        message.channel.send("------------------------------------");
        message.channel.send(new Date().getTime() - message.createdTimestamp + "ms");
        message.channel.send(`~${version}~`);
        message.channel.send("Visual Studio Code + JavaScript");
        message.channel.send("Kontakt: NotBot@freem1ca.8u.cz");
        message.channel.send("Love ya! Papa :heart:");
        message.channel.send("------------------------------------");
    }
});


bot.login(process.env.BOT_TOKEN);
