http = require("node:http");
fl = require("fs");
 func = (req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    fl.readFile("table.html", "utf-8", (error, data) => {
        if (error) {
            res.end("Error is exit");
            return;
        }
        res.write(data);
        res.end();
    });
};
ser = http.createServer(func);
ser.listen(5000)