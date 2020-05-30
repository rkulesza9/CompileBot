module.exports =
{
  start : function(){ return new CompileRunInterpret_Module(); }
};

class CompileRunInterpret_Module {

	constructor(){
		this.test = "Compile, Run, Interpret Module";
	}

	process(cmd_json, index_start){
		var cmd_01 = cmd_json[index_start];
		console.log(this.test);
	}
	
}