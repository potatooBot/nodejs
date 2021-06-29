
const b=require("browserify");
const chalk = require("chalk");

const file=require("./index.js");
const validator = require("validator");
// console.log(chalk.blue.underline.reverse("hello World"));
// console.log(chalk.green.underline.inverse("Success"));
const valid =validator.equals("Keshav","Kshav");
console.log( valid ? chalk.green.inverse(valid): chalk.red.inverse(valid));
// console.log("thisii")
// b.add("./index.js")
// console.log("heu");
// let list=document.getElementById("list");
// list.innerHTML="hey hey hey";