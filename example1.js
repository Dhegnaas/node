let ht=require ("http")
func=function(req,res){
    res.writeHead(200,{ 'content-type':'text/html'})
    res.end ("<h1>hello world</h1>")
}
let ser=ht.createServer(func)
ser.listen(3000)