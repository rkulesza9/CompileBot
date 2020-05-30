module.exports =
{
  start : function(){ return new Output_Module(); }
};

class Output_Module {
	
	constructor(){
		this.test = "Output Module";
	}

	process(cmd_json, index_start){
		console.log(this.test);
   
   return cmd_json;
	}
}