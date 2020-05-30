module.exports =
{
  start : function(){ return new FileIO_Module(); }
};

class FileIO_Module {

	constructor(){
		this.test = "File IO Module";
	}

	process(cmd_json, index_start){
		console.log(this.test);
	}
}