const Discord = require("Discord");
const Bot = Discord.client();
const token = "Njk4NDIyMDk0NTcyMjkwMDk4.XqdICQ.rTvA62jCxiJDpmk0wl6o4DoPKOM";

bot.login(token);
bot.on('ready', function(){
  alert("logged in");
});

bot.on('message', function(msg)){
  var split = msg.split(" ");
  if(split[0] == "+compilebot"){
    msg.reply("Testing 123...");
  }
}
