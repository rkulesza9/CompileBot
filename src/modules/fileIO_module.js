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
		var console_output = "";

		fs.writeFile(params[0], params[1], (err) => {
			if (err){
				console_output = `There was some kind of problem trying to write to ${params[0]}!`;
			} 
			console_output = `Successfully wrote to and saved ${params[0]}!`;
		});

		return { subroutine : "output", paramaters: [console_output] };
	}

	append(cmd){
		var params = cmd.paramaters;

		fs.appendFile(params[0], params[1], (err) => {
			if (err) throw err;
			console.log('The file has been appended!');
		});

		return { subroutine : "output", paramaters: [`${params[0]} was saved successfully! Maybe. This is just a test.`] };
	}

	write(cmd){
		return new(cmd);
	}

	read(cmd){
		return { subroutine : "output", paramaters: ["Not Implemented"]};
	}

	delete(cmd){
		return { subroutine : "output", paramaters: ["Not Implemented"]};
	}

	files(cmd){
		return { subroutine : "output", paramaters: ["Not Implemented"]};
	}
}