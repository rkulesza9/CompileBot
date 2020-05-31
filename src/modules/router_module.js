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
			"console" : this.module_CRI,
			"compile" : this.module_CRI,
			"run" : this.module_CRI,
			"lang" : this.module_CRI,
			"new" : this.module_FIO,
			"append" : this.module_FIO,
			"write" : this.module_FIO,
			"read" : this.module_FIO,
			"delete" : this.module_FIO,
			"files" : this.module_FIO
		};
   
    return route;
	}

	route(cmd_json){
		for(var x = 0; x < cmd_json.length; x++){
			var cmd = cmd_json[x];
      		var result = this.module_router[cmd.subroutine].process(cmd);
      		if(result != null) cmd_json = cmd_json.push(result); //a module can produce json to be interpreted by another module (eg. output module)
		}
	}

}