const express = require("express");
const TextToText = require("../TextToText");

const TextToTextGenerator = express.Router();

TextToTextGenerator.post("/", TextToText);

module.exports = TextToTextGenerator;
