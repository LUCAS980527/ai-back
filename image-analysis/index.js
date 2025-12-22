const client = require("../huggingface--inference");
const getImageAnalysis = async (req, res) => {
  console.log("fileinfo:", {
    originalname: req.file.originalname,
    mimetype: req.file.mimetype,
    size: req.file.size,
  });
};
