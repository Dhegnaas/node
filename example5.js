let express = require("express");
let app = express();
let path = require("path");
// Static files folder
app.use(express.static("public"));
// Page1 route
app.get("/page1", (req, res) => {
    res.sendFile(path.join(__dirname, "Login.html"));
});
// Login route
app.get("/login", (req, res) => {
     user = req.query.txtuser?.trim();
     pass = req.query.txtpass?.trim();

    if (user === "dayax" && pass === "123") {
        res.send(`Welcome Eng <b>${user}</b>`);
    } else {
        res.send("Invalid username or password");
    }
});

// Start server
app.listen(3300)
