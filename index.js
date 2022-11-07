const express = require("express");
const { json } = require(express);
const { user } = require("./router/userRouter");
const app = express();

app.use(json())

app.use("/user", user);

const PORT = process.env.PORT || 3000; //port to connect

app.get("/", (req, res) => {
    res.send("Traning Blog");
});

app.listen(PORT, () => console.log("server runing on ${PORT}"));