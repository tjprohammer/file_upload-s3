const AWS = require('aws-sdk');
require('dotenv').config();

//Configure the AWS SDK credencials
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
});


const uploadController = {
    uploadFile: async(req, res) => {

        //Create a new s3 instance
    const s3 = new AWS.S3();

    //Define the params
    const s3Params = {
        Bucket: "fileuploadtos3test",
        Key: req.body.fileName,
        Expires: 60,
        ContentType: req.body.fileType,
        ACL: 'private'
    };

        //Generate the presigne URL
    s3.getSignedUrl("putObject", params, (err, url) => {
        if(err) {
            return res.send({error: err});
        }

        return res.send({url});
    });
}
};

module.exports = uploadController