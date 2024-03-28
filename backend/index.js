const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const chatGPT = require("./routes/chatGPT");
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", chatGPT);




app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
