module.exports =
{
  start : function(){ return new Router(); }
};

class Router{

	constructor(){
		this.module_FIO = require("./fileIO_module");
		this.module_CRI = require("./compileRunInterpret_module");
		this.module_Output = require("./output_module");
		this.module_router = build_router();
	}

	build_router(){
		return 
		{
			"compile" : this.module_CRI

		};
	}

	route(cmd_json){
		for(var x = 0; x < cmd_json.length; x++){
			cmd = cmd_json[x];
			if(cmd["processed"] == true) continue;
			if(cmd.subroutine == null) continue;

			//sets processed flag to true, appends additional cmds for output module
			//expectation: one command is complete left to right before another command begin
			cmd_json = this.module_router[cmd.subroutine].process(cmd_json, index_start);
		}
	}

}