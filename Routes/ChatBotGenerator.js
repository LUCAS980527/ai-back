const express = require("express");
const ChatBot = require("../ChatBot");

const ChatBotGenerator = express.Router();

ChatBotGenerator.post("/", ChatBot);

module.exports = ChatBotGenerator;
