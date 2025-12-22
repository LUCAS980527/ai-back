const client = require("../huggingface--inference");
const getImageAnalysis = async (req, res) => {
  console.log("fileinfo:", {
    originalname: req.file.originalname,
    mimetype: req.file.mimetype,
    size: req.file.size,
  });

  try{
    const base64Image = req.file.buffer.tostring("base64");
    console.log("base64Image", base64Image);

    const chatCompletion = await client.chatCompletion({
        
    })
  }
};
