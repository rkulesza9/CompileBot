module.exports =
{
  start : function(){ return new CompileRunInterpret_Module(); }
};

class CompileRunInterpret_Module {

	constructor(){
		this.test = "Compile, Run, Interpret Module";
	}

	console(cmd){
		console.log("console");
		return json;
	}

	compile(cmd){
		console.log("compile");
		return json;
	}

	run(cmd){
		console.log("run");
		return json;
	}

	lang(cmd){
		console.log("lang");
		return json;
	}
	
}