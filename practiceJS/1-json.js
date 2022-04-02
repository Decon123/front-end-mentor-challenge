const fs = require("fs");

const htmlBuffer = fs.readFileSync("index.html");

const htmlJson = htmlBuffer.toString();
//const htmlObject = JSON.parse(htmlJson);
console.log(htmlJson);
//const chalk = require("chalk");
/* const book = {
    title:"Ego is the enemy",
    author:"Ryan"
}
console.log(book.title);

//convert this object to JSON
const jsonBook = JSON.stringify(book);

fs.writeFileSync("note.json",jsonBook);
console.log(jsonBook); */
/* 
const bookBuffer = fs.readFileSync("note.json");
const bookJson = bookBuffer.toString();
const bookObject = JSON.parse(bookJson);
console.log(bookObject.title);

bookObject.author = "Decon";
const jsonBook = JSON.stringify(bookObject);
fs.writeFileSync("note.json",jsonBook);
console.log(jsonBook); */

/* const student = {
    name:"Decon",
    subject:"Maths",
    university:"Moratuwa"
} */
/* const school = JSON.stringify(student);
fs.writeFileSync("school.json",school); */

/* const schoolBuffer = fs.readFileSync("school.json");
const schoolJson = schoolBuffer.toString();
const schoolObject = JSON.parse(schoolJson);
schoolObject.subject = "bio";
 */
/* const school = JSON.stringify(schoolObject);
fs.writeFileSync("school.json",school);

const arr =[];
arr.push({
    name:"Decon",
    scl:"Peters"
});
console.log(arr);

var guessList = ["Decon","Yasiru","Bimsara","Angela"];
for(var i=0;i<guessList.length;i++){
    if(guessList[i] === "Bimsara"){
        continue;
    }

    console.log(guessList[i]);
} */