const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
// routes
const description = require("./routes/routes");

app.use(cors());
app.use(express.json());
app.use("/api", description);

app.listen("5000", () => {
    mongoose.connect("mongodb://localhost:27017/todo", {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify: false
    }, (err) => {
        if(err) throw err;
        console.log("ok");
    });
});
