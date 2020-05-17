const Discord = require("discord.js");
const Bot = new Discord.Client();
const Token = "Njk4NDIyMDk0NTcyMjkwMDk4.XqdICQ.rTvA62jCxiJDpmk0wl6o4DoPKOM";

Bot.login(Token);
Bot.on('ready', function(){
  console.log("logged in");
});

Bot.on('message', function(msg){
  var split = msg.content.split(" ");
  if(split[0] == "+compilebot"){
    msg.reply("Testing 123...");
  }
});
