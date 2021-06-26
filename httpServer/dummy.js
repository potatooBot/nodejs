const http = require('http');
const url = require('url');
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const server =http.createServer(function(req, res){
    if (req.url=='/') {
        let xhr = new XMLHttpRequest(); 
        xhr.getResponseHeader("Content-Type","application/json");
        xhr.open('GET',"https://dummy.restapiexample.com/api/v1/employee/1",true);
        xhr.onload= function(){
            if (this.status==200) {
                let obj =JSON.parse(this.responseText);
                // res.write(obj);
                console.log(obj);
                for (key in obj) {
                   console.log(key.employee_name)
                    res.end(key);
                   
                }
            }
            xhr.send();
        }
       
        res.end("working good");
        
    }
}).listen(5500,()=>{
    console.log("listening");
})