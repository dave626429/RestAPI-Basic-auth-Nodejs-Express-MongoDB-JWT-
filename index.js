const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// import routes
const authRoutes = require("./routes/auth");

// connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    { userNewUrlParser : true },
    () => { console.log("Connected to Concox[DB]") }
);



// route middlewares
app.use("/api/user", authRoutes);

app.listen(3000, () => console.log("server is running : port=3000"));