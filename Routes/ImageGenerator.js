const express = require("express");
const ImageCreator = require("../TextToImage");

const ImageGenerator = express.Router();

ImageGenerator.post("/", ImageCreator);

module.exports = ImageGenerator;
