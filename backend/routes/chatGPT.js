const express = require("express"); 
const router = express.Router();
const {gpt} = require("../controllers/gptController");

router.post("/model", gpt);

module.exports = router;