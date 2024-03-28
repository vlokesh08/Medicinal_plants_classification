const { model } = require("@tensorflow/tfjs");
const express = require("express");
const router = express.Router();
const predict_data = require("../controllers/modelController");

router.get("/mode1", predict_data);
