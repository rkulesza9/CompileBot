module.exports =
{
  start : function(){ return new FileIO_Module(); }
};

class FileIO_Module {

	constructor(){
		this.test = "File IO Module";
		this.cmds = this.cmd_map();
	}

	process(cmd_json, index_start){
		var cmd_01 = cmd_json[index_start];
		this.cmds[cmd_01.subroutine](cmd_json, index_start);
   		return cmd_json;
	}

	cmd_map(){
		var map = {
			"new" : this.new,
			"append" : this.append,
			"write" : this.write,
			"read" : this.read,
			"delete" : this.delete,
			"files" : this.files
		};
		return map;
	}

	new(cmd_json, index_start){
		console.log("new");
	}

	append(cmd_json, index_start){
		console.log("append");
	}

	write(cmd_json, index_start){
		console.log("write");
	}

	read(cmd_json, index_start){
		console.log("read");
	}

	delete(cmd_json, index_start){
		console.log("delete");
	}

	files(cmd_json, index_start){
		console.log("files");
	}
}