const fs = require("fs");
const http = require("http");
const url = require("url");
// console.log("working");
const server=http.createServer(function(req, res){
    if(req.url=="/"){
        fs.readFile(`${__dirname}/api/index.json`,"utf8", (err,data)=>{
            console.log(data);
            const objData = JSON.parse(data);
            
           res.end(objData.student[0].lastname);
          
            // res.end("working");
           
        })
    }
}).listen(8800,()=>{
    console.log("listening");
});