const AWS = require("aws-sdk");
require("dotenv").config();

//Configure the AWS SDK credencials
AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

const uploadController = {
  uploadFile: async (req, res) => {
    console.log("Request Body", req.body);
    //Create a new s3 instance
    const s3 = new AWS.S3();

    //Define the params
    const s3Params = {
      Bucket: "fileuploadtos3test",
      Key: req.body.fileName,
      Expires: 60,
      ContentType: req.body.fileType,
      ACL: "private",
    };

    //Generate the presigne URL
    s3.getSignedUrl("putObject", s3Params, (err, url) => {
      if (err) {
        return res.status(500).send({ error: err });
      }

      return res.send({ url });
    });
  },
};

module.exports = uploadController;
