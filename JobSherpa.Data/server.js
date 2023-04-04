const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require('dotenv').config()

const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./backend/models");

// If in development
if (app.get('env') === 'development') {
//     // Drop existing tables and re-sync database
//     db.sequelize.sync({ force: true }).then(() => {
//         console.log("Drop and re-sync db.");
//     });
// }
// else {
    // Sync database
    db.sequelize.sync();
}

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to JobSherpa!" });
});

require("./backend/routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});