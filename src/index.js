const Discord = require("discord.js");
const Bot = new Discord.Client();
const Token = "Njk4NDIyMDk0NTcyMjkwMDk4.XqdICQ.rTvA62jCxiJDpmk0wl6o4DoPKOM";

const Interpreter = require("./modules/interpreter_module").start();
const Router = require("./modules/router_module").start();

Bot.login(Token);
Bot.on('ready', function(){
  console.log("logged in");
});

Bot.on('message', function(msg){
  if(Interpreter.isCBCommand(msg.content)){
    Router.route(Interpreter.json(msg.content));
    msg.reply(Router.output_str);
  }
});