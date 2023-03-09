const express = require('express');
const app = express();
const db = require('./DataBase/index');
const multer = require('multer');
const bodyParser = require('body-parser');
const Users = require('./view/UserRoute');
app.use(bodyParser.json());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './Images/ProfilePhoto')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  });
  
  const upload = multer({ storage: storage });
  app.use('/uploads', express.static('uploads'));

  app.use('/api',upload.single('file'),Users);
// app.use('/api',Users);
app.listen(3000, () => {
    console.log('Server Started');
});