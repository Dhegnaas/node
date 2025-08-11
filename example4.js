http=require("http")
fl=require("fs")
const { type } = require("os");
const path =require("path");
func=function(req,res){
if (req.url==="/" || req.url==="/table.html"){
    fl.readFile("table.html","utf-8",(error,data)=>{
        if(error)
            return end ("error")
        else{
            res.writeHead(200,{"content-type":"text/html"})
            res.write(data)
            res.end()
        }
    })
}
else if (req.url==="/" || req.url==="/table.css"){
    fl.readFile("table.css","utf-8",(error,data)=>{
        if(error)
            return end ("error")
        else{
            res.writeHead(200,{"content-type":"text/css"})
            res.write(data)
            res.end()
        }
    })
}
else if (req.url === "/script.js") {
  fl.readFile("script1.js",(error, data) => {
    if (error) {
      res.end("Error loading script");
      return;
    }
    res.writeHead(200, { "Content-Type": "application/javascript" });
    res.write(data);
    res.end();
  });
}
}
ser=http.createServer(func)
ser.listen(3000)