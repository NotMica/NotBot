const botconfig = require("./botconfig.json");
const quoteconfig = require("./quoteconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
const client = new Discord.Client();
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
    //bot.user.setActivity('Rudolfa v depresích', { type: 'Watching' });
    bot.user.setActivity(`si v JavaScriptu | ${botconfig.version}`);  
});

client.on('ready', () => {
    setTimeout(function(){
        sendMessage();
        var dayMillseconds = 1000 * 60 * 60 * 24;
        setInterval(function(){ 
            sendMessage();
        }, dayMillseconds)
    }, leftToEight())
})

function leftToEight(){
    var d = new Date();
    return (-d + d.setHours(8,0,0,0));
}

function sendMessage(){
    var guild = client.guilds.get('guildid');
    if(guild && guild.channels.get('channelid')){
        guild.channels.get('channelid').send("Dobré ráno chlapci :slight_smile:");
    }

};

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
console.log(`┌────────────────────────────┐`);
console.log("║ Quotes successuly loaded!  ║");
console.log(`└────────────────────────────┘`);

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
        message.channel.sendMessage("Nikoho s takovým nickem neznám :confused: Možná máš namysli <@308941843654246410>");
      }
    else if (cmd === `mico`){
        message.channel.sendMessage("Nikoho s takovým nickem neznám :confused: Možná máš namysli <@308941843654246410>");
    }
    else if (cmd === `Mico?`){
        message.channel.sendMessage("Nikoho s takovým nickem neznám :confused: Možná máš namysli <@308941843654246410>");
    }
    else if (cmd === `mico?`){
        message.channel.sendMessage("Nikoho s takovým nickem neznám :confused: Možná máš namysli <@308941843654246410>");
    }
    else if (cmd === `Míco?`){
        message.channel.sendMessage("Nikoho s takovým nickem neznám :confused: Možná máš namysli <@308941843654246410>");
    }
    else if (cmd === `Míco`){
        message.channel.sendMessage("Nikoho s takovým nickem neznám :confused: Možná máš namysli <@308941843654246410>");
    }
    else if (cmd === `míco?`){
        message.channel.sendMessage("Nikoho s takovým nickem neznám :confused: Možná máš namysli <@308941843654246410>");
    }
    else if (cmd === `míco`){
        message.channel.sendMessage("Nikoho s takovým nickem neznám :confused: Možná máš namysli <@308941843654246410>");
    }
    ;
    
    if (cmd === `Notko`){
        message.channel.sendMessage("Notko tu sice není, ale můžeš mi to pro něj nechat vzkaz, který mu pak následně sdělím :smile:");
      }
    else if (cmd === `notko`){
        message.channel.sendMessage("Notko tu sice není, ale můžeš mi to pro něj nechat vzkaz, který mu pak následně sdělím :smile:");
    }
    else if (cmd === `Notko?`){
        message.channel.sendMessage("Notko tu sice není, ale můžeš mi to pro něj nechat vzkaz, který mu pak následně sdělím :smile:");
    }
    else if (cmd === `notko?`){
        message.channel.sendMessage("Notko tu sice není, ale můžeš mi to pro něj nechat vzkaz, který mu pak následně sdělím :smile:");
    }
    else if (cmd === `Notko_?`){
        message.channel.sendMessage("Notko tu sice není, ale můžeš mi to pro něj nechat vzkaz, který mu pak následně sdělím :smile:");
    }
    else if (cmd === `Notko_`){
        message.channel.sendMessage("Notko tu sice není, ale můžeš mi to pro něj nechat vzkaz, který mu pak následně sdělím :smile:");
    }
    else if (cmd === `notko_?`){
        message.channel.sendMessage("Notko tu sice není, ale můžeš mi to pro něj nechat vzkaz, který mu pak následně sdělím :smile:");
    }
    else if (cmd === `notko_`){
        message.channel.sendMessage("Notko tu sice není, ale můžeš mi to pro něj nechat vzkaz, který mu pak následně sdělím :smile:");

    };

    

    /* if (cmd === `nečum`){
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
    }; */ 

    if (cmd === "papa"){
        message.channel.sendMessage("Papa :heart:");
    }
    else if(cmd === "Papa"){
        message.channel.sendMessage("Papa :heart:");
    }
    else if(cmd === "Papa :heart:"){
        message.channel.sendMessage("Papa :heart:");
    }
    else if(cmd === "papa :heart:"){
        message.channel.sendMessage("Papa :heart:");
    };

    if(cmd == `${prefix}info`){
        message.channel.send("------------------------------------");
        message.channel.send(new Date().getTime() - message.createdTimestamp + "ms");
        message.channel.send(`~${version}~`);
        message.channel.send("Visual Studio Code + JavaScript");
        message.channel.send("Kontakt: Notko_#3284");
        message.channel.send("------------------------------------");
    }
});

bot.login(process.env.BOT_TOKEN);
