const { json } = require("express");
const client = require("../huggingface-inference");
const axios = require("axios");

const TextCreator = async (req, res) => {
  if (!req.file) return res.json("file alga");
  console.log("file info:", {
    originalname: req.file.originalname,
    mimetype: req.file.mimetype,
    size: req.file.size,
  });

  try {
    const base64Image = req.file.buffer.toString("base64");

    const chatCompletion = await client.chatCompletion({
      model: "zai-org/GLM-4.6V:novita",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "Describe this image in one sentence.",
            },
            {
              type: "image_url",
              image_url: {
                url: `data:${req.file.mimetype};base64,${base64Image}`,
              },
            },
          ],
        },
      ],
    });

    res.status(200).json({
      success: true,
      image: `data:image/png;base64,${base64Image}`,
      data: chatCompletion.choices[0].message,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Текст үүсгэж чадсангүй" });
  }
};

module.exports = TextCreator;
