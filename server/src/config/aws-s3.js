const AWS = require("aws-sdk");
const S3 = new AWS.S3();
require('dotenv').config()

AWS.config.update({
  accessKeyId: process.env.YOUR_ACCESS_KEY_ID,
  secretAccessKey: process.env.YOUR_SECRET_ACCESS_KEY,
  region: "REGION"
});

const getSignedFileUrl = (bucketName, objectKey, expiration) => {
  const params = {
    Bucket: bucketName,
    Key: objectKey,
    Expires: expiration
  };

  return new Promise((resolve, reject) => {
    S3.getSignedUrl("getObject", params, (err, url) => {
      if(err){
        reject(err);
      }else {
        resolve(url);
      }
    });
  });
};