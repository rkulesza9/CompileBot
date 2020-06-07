module.exports =
{
  start : function(){ return new Output_Module(); }
};

class Output_Module {
	
	constructor(){
		this.test = "Output Module";
	}

	console_log(cmd){
		console.log(cmd.paramaters[0]);
		return null;
	}
}