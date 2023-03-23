const { Storage } = require('@google-cloud/storage');
const Multer = require('multer');

const storage = new Storage({
  projectId: 'demo1212-606bb',
  keyFilename: '/Users/sparshjhariya/Desktop/TECHY/Internship/Tasks/Salesine/call-transcript/backend/middleware/gcp/serviceAccount.json',
});

const bucket = storage.bucket('video-call-transcript');

const multerMiddleware = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 500 * 1024 * 1024, // 500 MB limit
  },
//   fileFilter: (req, file, cb) => {
//     if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
//       cb(new Error('Only image files are allowed.'), false);
//     } else {
//       cb(null, true);
//     }
//   },
}).single('file');

module.exports = {multerMiddleware , bucket}
