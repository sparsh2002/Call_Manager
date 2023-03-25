const { Storage } = require('@google-cloud/storage');
const Multer = require('multer');
const fs = require('fs');
var randomId = require('random-id');
const storage = new Storage({
  projectId: 'demo1212-606bb',
  keyFilename: '/Users/sparshjhariya/Desktop/TECHY/Internship/Tasks/Salesine/call-transcript/serviceAccount.json',
});

const bucket = storage.bucket('video-call-transcript');

const multerMiddleware = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 500 * 1024 * 1024, // 500 MB limit
  },
}).single('file');

async function uploadUsingBlob(path) {
  
  var len = 30;
  var pattern = 'aA0'

  var id = randomId(len, pattern)
  const options = {
    destination: id,
    resumable: false,
  };


  bucket.upload(path)
    .then(() => {
      console.log('File uploaded successfully.');
    })
    .catch((err) => {
      console.error('Error uploading file:', err);
    });

  return id
}

module.exports = { multerMiddleware, bucket, uploadUsingBlob }
