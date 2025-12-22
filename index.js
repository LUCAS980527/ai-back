const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const getImageAnalysis = require("./image-analysis/index");


const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({storage});
dotenv.config();

const app = express();
const PORT = process.env.PORT || 1000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello backend");
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
