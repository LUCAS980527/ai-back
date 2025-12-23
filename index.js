const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const multer = require("multer");
const ImageGenerator = require("./Routes/ImageGenerator");
const TextGenerator = require("./Routes/TextGenerator");
const TextToTextGenerator = require("./Routes/TextToTextGenerator");
const ChatBotGenerator = require("./Routes/ChatBotGenerator");
const ChatBot = require("./ChatBot");

// const ImageToVideoGenerator = require("./Routes/ImageToVideoGenerator");
const storage = multer.memoryStorage();
const upload = multer({ storage });
dotenv.config();

const app = express();
const PORT = process.env.PORT || 1000;

app.use(cors());
app.use(express.json());

app.use("/Image-Generator", ImageGenerator);
app.use("/Text-Generator", upload.single("image"), TextGenerator);
app.use("/Text-To-Text-Generator", TextToTextGenerator);
app.use("/Chat-Bot", ChatBotGenerator);
// app.use("/Image-To-Video-Generator", ImageToVideoGenerator);

app.get("/", (req, res) => {
  res.send("hello backend");
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
