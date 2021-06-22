// console.log("Hi node running");
const fs= require("fs");
// fs.writeFileSync("keshav.txt","This is my new file");
// fs.appendFileSync("keshav.txt"," This is  something new ");
// const buffer=fs.readFileSync("keshav.txt");
// console.log(buffer.toString());
// fs.renameSync("sangita.txt","sangitaa.txt");
// fs.writeFileSync("bio.txt","This is my Bio ");
// fs.writeFile("fsAsync/new.txt","This is a new way",(err)=>{
// console.log("file created");
// });
fs.readFile("fsAsync/new.txt","utf-8",(err,data)=>{
    console.log(data);
})


