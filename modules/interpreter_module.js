module.exports = 
{
  start : function(){ return new Interpreter(); }
};

class Interpreter 
{
  constructor(){
    this.cmd_start = '+cb ';
    this.cmd_delim = ' ';
    this.cmd_delim_multi = ['{?','?}'];
    this.cmd_sub_start = '-';
  }

  isCBCommand(cmd){
    var size = this.cmd_start.length;
    var str = cmd.substring(0,size);
    return str === this.cmd_start;
  }
  
  json(cmd){
    if(this.isCBCommand(cmd)){
     // PARSE COMMAND, REFORMAT ARGS INTO JSON OBJECT 
    }
    return null;
  }
}
