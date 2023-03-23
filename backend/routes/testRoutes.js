const express = require('express')
const router = express.Router()
const {getFS, sampleAdd , upload} = require('../controllers/testController')
const {multerMiddleware , bucket} = require('../middleware/gcp/cloudstorage')
router.get("/" , (req , res) => {
    res.send("This api is reserved for Call Transcript Testing")
})

router.get("/firestore" , getFS  )
router.post("/firestore/sampleadd" , sampleAdd)
router.post("/storage/upload" , multerMiddleware, (req, res) => {
    const file = req.file;
  
    if (!file) {
      res.status(400).send('No file uploaded.');
      return;
    }
  
    const blob = bucket.file(file.originalname);
    const blobStream = blob.createWriteStream({
      metadata: {
        contentType: file.mimetype,
      },
    });
  
    blobStream.on('error', (err) => {
      console.error(err);
      res.status(500).send('Error uploading file.');
    });
  
    blobStream.on('finish', () => {
      res.status(200).send('File uploaded successfully.');
    });
  
    blobStream.end(file.buffer)})


module.exports = router