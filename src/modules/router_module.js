module.exports =
{
  start : function(){ return new Router(); }
};

class Router{

	constructor(){
		this.module_FIO = require("./fileIO_module").start();
		this.module_CRI = require("./compileRunInterpret_module").start();
		this.module_Output = require("./output_module").start();
		this.module_router = this.build_router();
	}

	build_router(){
		var route = {
			"compile" : this.module_CRI
		};
   
    return route;
	}

	route(cmd_json){
		for(var x = 0; x < cmd_json.length; x++){
			var cmd = cmd_json[x];
			if(cmd["processed"] == true) continue;
			if(cmd.subroutine == null) continue;

			//sets processed flag to true, appends additional cmds for output module
			//expectation: one command is complete left to right before another command begin
			//console.log(this.module_router[cmd.subroutine]);
      cmd_json = this.module_router[cmd.subroutine].process(cmd_json, x);
		}
	}

}