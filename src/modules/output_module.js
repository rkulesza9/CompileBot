module.exports =
{
  start : function(){ return new Output_Module(); }
};

class Output_Module {
	
	constructor(){
		this.test = "Output Module";
	}

	process(cmd){
		console.log(this.test);
   
   		return null;
	}
}