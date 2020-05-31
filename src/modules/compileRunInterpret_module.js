module.exports =
{
  start : function(){ return new CompileRunInterpret_Module(); }
};

class CompileRunInterpret_Module {

	constructor(){
		this.test = "Compile, Run, Interpret Module";
		this.cmds = this.cmd_map();
	}

	process(cmd){
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

	console(cmd){
		console.log("console");
	}

	compile(cmd){
		console.log("compile");
	}

	run(cmd){
		console.log("run");
	}

	lang(cmd){
		console.log("lang");
	}
	
}