module.exports =
{
  start : function(){ return new CompileRunInterpret_Module(); }
};

class CompileRunInterpret_Module {

	constructor(){
		this.test = "Compile, Run, Interpret Module";
	}

	console(cmd){
		return { subroutine : "output", paramaters: ["Not Implemented"]};
	}

	compile(cmd){
		return { subroutine : "output", paramaters: ["Not Implemented"]};
	}

	run(cmd){
		return { subroutine : "output", paramaters: ["Not Implemented"]};
	}

	lang(cmd){
		return { subroutine : "output", paramaters: ["Not Implemented"]};
	}
	
}