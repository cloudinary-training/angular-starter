require('dotenv').config();

const IncomingForm = require('formidable').IncomingForm;
const fs = require('fs');

var cloudinary = require('cloudinary').v2;

if (typeof (process.env.CLOUDINARY_URL) === 'undefined') {
  console.warn('!! cloudinary config is undefined !!');
  console.warn('export CLOUDINARY_URL or set dotenv file');
} else {
  console.log('cloudinary config:');
  console.log(cloudinary.config());
}
console.log('-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --');

module.exports = function upload(req, res) {
  const form = new IncomingForm();

  form.on('file', (field, file) => {
    // Do something with the file
    // e.g. save it to the database
    // you can access it using file.path
    console.log('file', file.name);
    console.log('file path', file.path);

    cloudinary.uploader.upload(file.path, { tags: 'angular_sample_upload' }, function(error, result) {
      if (!error && result && result.event === "success") { 
        console.log('Done! Here is the image info: ', result.info);
      }
      else if (error){
        console.log(error);
      }
    });
    const readStream = fs.createReadStream(file.path);
  });
  form.on('end', () => {
    res.json();
  });
  form.parse(req);
};