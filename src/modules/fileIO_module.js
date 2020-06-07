module.exports =
{
  start : function(){ return new FileIO_Module(); }
};

const fs = require('fs');

class FileIO_Module {

	constructor(){
		this.test = "File IO Module";
	}

	new(cmd){
		var params = cmd.paramaters;

		fs.writeFile(params[0], params[1], (err) => {
			if (err) throw err;
			console.log('The file has been saved!');
		});

		return { subroutine : "console_log", paramaters: [`${params[0]} was saved successfully! Maybe. This is just a test.`] };
	}

	append(cmd){
		console.log("append");
		return json;
	}

	write(cmd){
		console.log("write");
		return json;
	}

	read(cmd){
		console.log("read");
		return json;
	}

	delete(cmd){
		console.log("delete");
		return json;
	}

	files(cmd){
		console.log("files");
		return json;
	}
}