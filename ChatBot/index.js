const ChatBot = async (req, res) => {
  const { message } = req.body;
  console.log("message:", message);

  if (!message) {
    return res.status(400).json({ error: "Message is required!" });
  }

  try {
    const result = await client.chatCompletion({
      model: "mistralai/Mistral-7B-Instruct-v0.3",
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
    });

    if (!result?.choices?.length) {
      throw new Error("No response from model");
    }

    const reply = result.choices[0].message.content;

    res.status(200).json({ reply });
  } catch (err) {
    console.error("HF ERROR:", err);
    res.status(500).json({
      error: "Failed to generate text",
      details: err.message,
    });
  }
};

module.exports = ChatBot;
