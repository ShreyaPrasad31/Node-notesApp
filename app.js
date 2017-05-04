
const fs = require("fs");
const os = require("os");
const yargs = require("yargs");
const notes = require("./notes");

const _ = require("lodash"); //common name for loadash modules
const argv = yargs.argv

var command = process.argv[2];
if (command == 'add') {
	var note = notes.addNote(argv.title,argv.body);
	if (note == undefined){
		console.log("Note title taken");
	}else {
		console.log("added note!");
		console.log("---");
		console.log(`Title: ${note.title}`);
		console.log(`Body: ${note.body}`);
	};
} else if (command =='list'){
	var allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} note(s).`);
	allNotes.forEach(() => {
		notes.logNote(note);

	});
} else if (command == 'remove'){
	var noteRemoved = notes.remove(argv.title);
	var message = noteRemoved ? "The note was removed" : "Note not found";
	console.log(message);
} else if (command == 'read'){
	var note = notes.getNote(argv.title);
	if (note){
		console.log("Note found");
		console.log("---");
		console.log(`Title: ${note.title}`);
		console.log(`Body: ${note.body}`);

	}else{
		console.log("Note not found");
		
	};
	
}

else {
	console.log("Command not recognised");
};

