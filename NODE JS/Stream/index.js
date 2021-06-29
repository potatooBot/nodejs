const http = require('http');
const stream = require('stream');
const fs= require('fs');
let server=http.createServer(function(req, res){
    let read =fs.createReadStream("inputtt.txt");
    read.on("data",(chunk) =>{
        res.write(chunk);
    })
    read.on("end",() =>{
        res.end();
    })
    read.on("error",(err) =>{
     res.end(`<h1>Not Found </h1>`)
    })
}).listen(8000,()=>{
    console.log("listening");
})
// let server=http.createServer(function(req, res){
//     let read =fs.createReadStream("input.txt");
//     read.write("this is file stream");
//     read.end();
//     read.on("data",(chunk) =>{
//         res.write(chunk);
//     })
//     read.on("end",() => {
//         res.end();
//     })
//     read.on("error",(err) => {
//         console.log("error found")
//     })
// }).listen(8000,()=>{
//     console.log("listening");
// })

// var http = require('http');
// var fs = require('fs');

// http.createServer(function(req, res) {
//   // This opens up the writeable stream to `output`
//   var writeStream = fs.createWriteStream('input.txt');

//   // This pipes the POST data to the file
//   req.pipe(writeStream);

//   // After all the data is saved, respond with a simple html form so they can post more data
//   req.on('end', function () {
//     res.writeHead(200, {"content-type":"text/html"});
//     res.end('<form method="POST"><input name="test" /><input type="submit"></form>');
//   });

//   // This is here incase any errors occur
//   writeStream.on('error', function (err) {
//     console.log(err);
//   });
// }).listen(8080);