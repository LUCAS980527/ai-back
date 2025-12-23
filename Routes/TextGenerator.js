const express = require("express");
const TextCreator = require("../ImageToText");

const TextGenerator = express.Router();

TextGenerator.post("/", TextCreator);

module.exports = TextGenerator;
