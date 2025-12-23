const fs = require("fs");
const client = require("../huggingface-inference");
const multer = require("multer");

const VideoCreator = async (req, res) => {
  const { prompt } = req.body;
  const inputFile = req.file.buffer;
  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required!" });
  }

  try {
    const imageBuffer = fs.readFileSync(inputFile);

    const result = await client.imageToVideo({
      provider: "fal-ai",
      model: "lightx2v/Wan2.2-Distill-Loras",
      inputs: imageBuffer,
      parameters: {
        prompt: prompt,
      },
    });

    res.status(200).json({
      success: true,
      video: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate video" });
  }
};

module.exports = VideoCreator;
