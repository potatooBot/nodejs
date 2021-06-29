const fs=require('fs');
const bio ={
    name : "Keshav Kumar ",
    roll : 26,
    favouriteSub :"Coding",
}
// console.log(bio);
let jsonData =JSON.stringify(bio);
// console.log(jsonData);
// fs.writeFile("index.json",jsonData,(err)=>{
//     console.log("File Made");
// })
fs.readFile("index.json","utf8",(err,data)=>{
    console.log(data);
    let objdata=JSON.parse(data);
    console.log(objdata);
});
