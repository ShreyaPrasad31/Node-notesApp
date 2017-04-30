console.log("app is starting")
const fs = require("fs");//require the fs module
const os = require("os");
const yargs = require("yargs");
const notes = require("./notes");

const _ = require("lodash"); //common name for loadash modules
const argv = yargs.argv

var command = process.argv[2];
if (command == 'add') {
	notes.addNote(argv.title,argv.body);
} else if (command =='list'){
	notes.getAll();
} else if (command == 'remove'){
	notes.remove(argv.title);
} else if (command == 'read'){
	notes.read(argv.title);
}

else {
	console.log("Command not recognised");
};

