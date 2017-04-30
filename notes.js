console.log("module");
const fs = require("fs");
var addNote = (title,body) => {
    var notes = [];
    var note = {
    	title,
    	body
    };
    notes.push(note);
    fs.writeFileSync("notes-data.json",JSON.stringify(notes));

};
var getAll = () => {
    console.log("Getting all notes");
};
var remove = (title) => {
    console.log("removing",title );
};
var read = (title) => {
    console.log("readig from",title);
};
module.exports ={
  addNote,
  getAll,
  remove,
  read

};