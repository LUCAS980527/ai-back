const { InferenceClient } = require("@huggingface/inference");
const dotenv = require("dotenv").config();

const client = new InferenceClient(process.env.HF_TOKEN);

module.exports = client;
