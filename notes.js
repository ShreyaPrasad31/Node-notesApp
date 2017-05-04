const fs = require("fs");
var fetchNotes = () => {
	 try{
    	 var notesString = fs.readFileSync("notes-data.json");
         return JSON.parse(notesString)

    }catch(e){
    	return [];

    }
   

};
var saveNotes = (notes) => {
	fs.writeFileSync("notes-data.json",JSON.stringify(notes));

};
var addNote = (title,body) => {
    var notes = fetchNotes();
    var note = {
    	title,
    	body
    };
     var duplicatenotes = notes.filter((note) =>{
    	return note.title === title;
    });
   
    if (duplicatenotes.length==0){
    	notes.push(note);
    	saveNotes(notes);
    	return note
    

    };

   
    
};
var getAll = () => {
    return fetchNotes();
};
var remove = (title) => {
    //fetch notes
    //filter notes, removing notes with a different title
    //save notes array
    var notes = fetchNotes();
    var aLL_notes_expected_toremove = notes.filter((note) =>{//always returns an array
    	return note.title != title;
    });
    saveNotes(aLL_notes_expected_toremove);	

    return notes.length != aLL_notes_expected_toremove.length; 

};
var getNote = (title) => {
    var notes = fetchNotes();
    var get_it = notes.filter((note) => {
    	return note.title === title;
    });
    return get_it[0]; 
};
var logNote = (note) => {
	console.log("---");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);

};
module.exports ={
  addNote,
  getAll,
  remove,
  getNote,
  logNote

};