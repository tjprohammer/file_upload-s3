const AWS = require("aws-sdk");
require("dotenv").config();

//Configure the AWS SDK credencials
AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  signatureVersion: "v4",
  region: "us-west-2",
});

const uploadController = {
  uploadFile: async (req, res) => {
    //Create a new s3 instance
    const s3 = new AWS.S3();

    //Define the params
    const s3Params = {
      Bucket: "fileuploadtos3test",
      Key: fileName,
      Expires: 300,
    };

    //Generate the presigned URL
    s3.getSignedUrl("putObject", s3Params, (err, url) => {
      if (err) {
        reject(err);
      } else {
        resolve(url);
      }
    });
  },
};

module.exports = uploadController;
