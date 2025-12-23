const express = require("express");
const multer = require("multer");
const VideoCreator = require("../ImageToVideo");

const router = express.Router();
const upload = multer();

router.post("/", upload.single("image"), VideoCreator);

module.exports = router;
