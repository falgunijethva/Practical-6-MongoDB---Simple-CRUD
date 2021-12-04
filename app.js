//require("dotenv").config();
require("dotenv").config();

const express = require('express')
const app = express()
app.use(express.json());
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");


const owner = require("./owner");
const event = require("./event");
app.use("/owner",owner);
app.use("/event",event);

mongoose
    .connect(process.env.MONGOURL)
    .then(() => console.log("mongo db connect "));

app.get('/', (req, res) => res.send('welcome to Event managemnet System(mongpDB)'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
