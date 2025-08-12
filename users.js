let express = require("express");
let mysql = require("mysql2");
let path = require("path");
let app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

let conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node"
});

// Page form-ka
app.get("/user", (req, res) => {
  res.sendFile(path.join(__dirname, "users.html"));
});

// Insert user
app.post("/users", (req, res) => {
  const user = req.body.txtuser;
  const pass = req.body.txtpass;
  const values = [user, pass];

  conn.query(
    "INSERT INTO users(username, userpassword) VALUES (?, ?)",
    values,
    (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Failed to insert user.");
      }
      res.send("User inserted successfully!");
    }
  );
});

// View all users
app.get("/userView", (req, res) => {
  conn.query("SELECT id, username, userpassword FROM users", (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Failed to fetch users.");
    }
    // Format: id,username,password/id,username,password
    let rows = results.map(row => `${row.id},${row.username},${row.userpassword}`).join("/");
    res.send(rows);
  });
});

app.listen(3300)