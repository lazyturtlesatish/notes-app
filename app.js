/*
 // Lecture : 10
const fs = require("fs");


fs.writeFileSync("notes.txt", "lorem Ips correctly formatted for display");
fs.appendFileSync("notes.txt", "  data to append");
 */


/* 
// Lecture : 11
const validator=require('validator');
// import validator from "validator"; 
const add=require('./utils.js');
const getNotes = require('./notes.js');
console.log(add(2,6));
console.log(getNotes());

console.log("check email is valid",validator.isEmail('satish180720000@gmailcom'));


console.log("check is url is valid",validator.isURL('https://satish180720000@gmail.com'));
 */


import { getNotes, addNote, removeNotes } from "./notes.js";
import chalk from "chalk";
import add from './utils.js'
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
const argv = yargs(hideBin(process.argv)).argv;

console.log(getNotes());
console.log(chalk.bgYellowBright.inverse.bold("Hello world!"));
console.log(chalk.blue.inverse.bold("Hello world 2"));
const command = process.argv[2];
// get userInput
console.log(command);
if(command=='add')
console.log(add(2, 6));
// yargs.version('1.1.0');
/*  add , remove , read and list notes */
console.log(argv);

/* yargs(hideBin(process.argv)).command({
  command: "add",
  describe: "Add an new note",
  handler: function () {
    console.log("Adding a new note");
  },
});
 */


yargs(hideBin(process.argv))
  .command(
    "add",
    "Add an new note",
    {
      builder: {
        title: {
          describe: "Title of the note",
          demandOption: false, // This means it is required
          type: "string",
        },
        body: {
          describe: "Body of the note",
          demandOption: false, // This means it is required
          type: "string",
        },
      },
    },
    (argv) => {
      console.log("Title: ", argv.title);
      console.log("Body: ", argv.body);
      console.log("Adding a new note");
      addNote(argv.title, argv.body);
    }
  )
  .command(
    "remove",
    "remove a note",
    {
      builder: {
        title: {
          describe: "Title of the note",
          demandOption: true, // This means it is required
          type: "string",
        }
      },
    },
    (argv) => {
      console.log("Title: ", argv.title);
      removeNotes(argv.title);
    }
  )
  .command("list", "list a note", () => {
    return console.log("listing a note");
  })
  .command("read", "read a note", () => {
    return console.log("reading a note");
  })
  .demandCommand(1)
  .parse();






