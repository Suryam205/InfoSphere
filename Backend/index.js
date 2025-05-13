const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./DB/connect");
const userRouter = require("./routes/user");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const JWT = require("jsonwebtoken");
require("dotenv").config();
const moviesRouter = require("./routes/movie");
const shoppingRouter = require("./routes/shopping");
const sportRouter = require("./routes/sports");
const commentRouter = require("./routes/comment");




const app = express();
const PORT =  process.env.PORT  ||4000;

connectDB();

app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173", // Your React frontend URL
    credentials: true
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/user", userRouter);
app.use("/movie", moviesRouter);
app.use("/shopping", shoppingRouter);
app.use("/sport" , sportRouter)
app.use("/comment" , commentRouter);



app.get("/", (req, res) => {
    res.send("Hello from the server");
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);

