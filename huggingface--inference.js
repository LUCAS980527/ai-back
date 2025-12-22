const {InferenceClient} = require("@huggingface/inference")

const client = new InferenceClient(HF_TOKEN)

module.exports = client