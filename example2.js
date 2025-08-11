let htpp=require("http")
fl=require("fs")
func=(req,res)=>{
    res.writeHead(200,{"content-type":"text/html"})
    let text=fl.readFileSync("arday.txt")
for (let i = 1; i <= 6; i++) {   // ✅ increments each loop
    res.write(`<h${i}>${text}</h${i}>`);
}
res.end()
}
ser=htpp=htpp.createServer(func);
ser.listen(3000)

