import { readFileSync, writeFileSync } from "fs";
function getNotes() {
  return "your notes ....";
}

const addNote = function (title, body) {
  console.log("title: " + title + " body:", body);
  const notes= loadNotes();
  const duplicateNotes = notes.filter(note => note.title === title);
  
if(duplicateNotes.length == 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("notes: ", notes);
}
else{
  console.log("note title taken");
}
};

const loadNotes = function () {

try{
  const dataBuffer = readFileSync("notes.json");
console.log(typeof dataBuffer);
const data = JSON.parse(dataBuffer.toString());
return data;
}
catch(err){
  return []
}
};

const  removeNotes = function(title){
  const notes = loadNotes();
  const filterNote=notes.filter(note=> note.title != title);
  if(notes.length>filterNote.length)
  console.log("removing notes is ", title);
  else
  console.log("title not found");
  saveNotes(filterNote);
}

const saveNotes = function(notes){
  // getting notes array
  const  dataJSON = JSON.stringify(notes);
  writeFileSync('notes.json', dataJSON);
}

export { getNotes, addNote, loadNotes, saveNotes, removeNotes };
