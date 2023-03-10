# file_upload-s3
file upload to aws s3 using images which then display as a gallery in the frontend
  
  
**Functional Requirements**  
- display images front private bucket
- add login screen?
- Use AWS S3 and configure permissions  
- Use Lamda functions to create the presigned url  
- configure lamdba to expose an HTTP API endpoint  
- use presigned URL. this ensures that access tokens are not exposed in the URL and expires automatically  
- use client side validation to ensure that only valid data is sent to the lambda function  
  
**Non-Functional Requirements**  
- scalability  
- security  
- availability  
  
## **Tech Stack:**  
AWS-SDK  
NodeJS  
Terraform - IAAC  
Api Gateway - will provide scalability, routing, security of our application
S3 - stores the files and provides versioning on the bucket
Lambda - the core functionality of our upload/download
Cloudfront - speed up uploads and downloads from s3 buckets  
  
  

