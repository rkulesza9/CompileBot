module.exports =
{
  start : function(){ return new Router(); }
};

class Router{

	constructor(){
		this.module_FIO = require("./fileIO_module").start();
		this.module_CRI = require("./compileRunInterpret_module").start();
		this.module_router = this.build_router();

		this.output_str = "";
	}

	build_router(){
		var route = {
			"console" : this.module_CRI.console,
			"compile" : this.module_CRI.compile,
			"run" : this.module_CRI.run,
			"lang" : this.module_CRI.lang,
			"new" : this.module_FIO.new,
			"append" : this.module_FIO.append,
			"write" : this.module_FIO.write,
			"read" : this.module_FIO.read,
			"delete" : this.module_FIO.delete,
			"files" : this.module_FIO.files,
			"output" : this.output,
		};
   
    return route;
	}

	route(cmd_json){
		for(var x = 0; x < cmd_json.length; x++){
			var cmd = cmd_json[x];
      		var result = this.module_router[cmd.subroutine](cmd); 
      		if(result != null) cmd_json.push(result); //a module can produce json to be interpreted by another module (eg. output module)
		}
	}

	output(cmd){
		this.output_str += cmd.paramaters[0];
		this.output_str += "\n";

		console.log(cmd);
		console.log(this.output_str);
		return null;
	}

}