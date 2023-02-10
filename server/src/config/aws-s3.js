import { S3Client } from "@aws-sdk/client-s3";
import dotenv from "dotenv";
dotenv.config();

// Set the AWS Region.
const REGION = "us-west-2";

// Create an Amazon S3 service client object.
const s3Client = new S3Client({
	region: REGION,
	credentials: {
		accessKeyId: process.env.ACCESS_KEY_ID,
		secretAccessKey: process.env.SECRET_ACCESS_KEY,
	},
});
export { s3Client };
