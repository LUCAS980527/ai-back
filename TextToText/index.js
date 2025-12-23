const client = require("../huggingface-inference");

const TextGeneration = async (req, res) => {
  const { prompt } = req.body;
  console.log("hello");

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required!" });
  }

  try {
    const chatCompletion = await client.chatCompletion({
      model: "XiaomiMiMo/MiMo-V2-Flash:novita",
      messages: [
        {
          role: "user",
          content: `Identify all the food ingredients and food. If food is in the prompt, list all ingredients that is utilized in the food. And if there's just only food ingredient, then just list its   ${prompt}`,
        },
      ],
    });

    console.log(chatCompletion);
    const message = chatCompletion?.choices[0]?.message?.content;

    res.status(200).json({
      success: true,
      text: message,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate text" });
  }
};

module.exports = TextGeneration;
