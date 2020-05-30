module.exports =
{
  start : function(){ return new CompileRunInterpret_Module(); }
};

class CompileRunInterpret_Module {

	constructor(){
		this.test = "Compile, Run, Interpret Module";
		this.cmds = this.cmd_map();
	}

	process(cmd_json, index_start){
		var cmd_01 = cmd_json[index_start];
		this.cmds[cmd_01.subroutine](cmd_json, index_start);
   		return cmd_json;
	}

	cmd_map(){
		var map = {
			"console" : this.console,
			"compile" : this.compile,
			"run" : this.run,
			"lang" : this.lang
		};
		return map;
	}

	console(cmd_json, index_start){
		console.log("console");
	}

	compile(cmd_json, index_start){
		console.log("compile");
	}

	run(cmd_json, index_start){
		console.log("run");
	}

	lang(cmd_json, index_start){
		console.log("lang");
	}
	
}