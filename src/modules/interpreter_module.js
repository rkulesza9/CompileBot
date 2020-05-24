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
     var cmd2 = cmd.slice();
     var cmd2_substr = cmd.slice();
     var cmd2_pointer = 0;
     var index_start = 0;
     var index_end = 0;
     var block_start = this.cmd_delim_multi[0];
     var block_end = this.cmd_delim_multi[1];
     var arr = [];

     //covert {? ... ?} into {?<index>?} --> ensures no spaces, <index> reflects position in array
     while(true){
       cmd2_substr = cmd2.substring(cmd2_pointer,cmd2.length);
       if(!cmd2_substr.includes(block_start)) break;
       index_start = cmd2_substr.indexOf(block_start);
       index_end = cmd2_substr.indexOf(block_end) + block_end.length;
       arr.push(cmd2_substr.substring(index_start, index_end));

       var cmd2_length_orig = cmd2.length;
       cmd2 = cmd2.substring(0,cmd2_pointer + index_start)+`{?${arr.length-1}?}`+cmd2.substring(cmd2_pointer + index_end,cmd2.length);
       var cmd2_change = cmd2_length_orig - cmd2.length;

       cmd2_pointer = cmd2_pointer + index_end - cmd2_change;
     }

     var cmd2_split = cmd2.split(this.cmd_delim);
     var result = [];
     var index_result = -1;
     for(var x = 1; x < cmd2_split.length; x++){ //x=0 --> +cb
       if(cmd2_split[x].charAt(0) === this.cmd_sub_start){
         index_result ++;
         var object = { };
         result.push(object);
         result[index_result]['subroutine'] = cmd2_split[x].substring(1,cmd2_split[x].length);
         result[index_result]['paramaters'] = [];
       } else if(cmd2_split[x].includes(block_start)){
         var index_arr = cmd2_split[x].substring(block_start.length,cmd2_split[x].length - block_end.length);
         result[index_result]['paramaters'].push(arr[index_arr].substring(block_start.length, arr[index_arr].length - block_end.length));
       } else {
         result[index_result]['paramaters'].push(cmd2_split[x]);
       }
     }
     return result;
    }
    return { error: `${cmd} is not a valid CompileBot command.` };
  }
}
