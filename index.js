const cors = require("cors");
const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.json());

app.use("/api/mail", require("./routes/send_mail"));

const port = process.env.PORT;

app.listen(port, () => {
  console.log("Server Started...");
});
