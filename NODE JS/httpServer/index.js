const http  =require('http');
const url =require('url');
const server =http.createServer(function(req, res){
    // res.write("THIS is write function\n");
    if (req.url=="/") {
        res.end(`good`)
    }
    else if(req.url=="/about"){
        res.writeHead(200,{"Content-type":"text/html"});
res.write("This is about section ")
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"});
        // res.write("Error 404");
        res.end();
    }
    // console.log(req.url);
    res.end();

}).listen(8000,()=>{
    console.log("listening ji");
})     