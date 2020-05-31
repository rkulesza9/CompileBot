module.exports =
{
  start : function(){ return new FileIO_Module(); }
};

class FileIO_Module {

	constructor(){
		this.test = "File IO Module";
		this.cmds = this.cmd_map();
	}

	process(cmd){
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

	new(cmd){
		console.log("new");
	}

	append(cmd){
		console.log("append");
	}

	write(cmd){
		console.log("write");
	}

	read(cmd){
		console.log("read");
	}

	delete(cmd){
		console.log("delete");
	}

	files(cmd){
		console.log("files");
	}
}