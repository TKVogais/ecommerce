const aws = require('aws-sdk/clients/s3')
const fs = require('fs')
require('dotenv').config()

const bucket = process.env.NODE_S3_BUCKET
const region = process.env.NODE_S3_BUCKET_REGION
const accessKeyId = process.env.NODE_AWS_ID
const secretAccessKey = process.env.NODE_S3_SECRET_ACESS_KEY
const url = process.env.NODE_URL_HOST

const s3 = new aws({
    region,
    accessKeyId,
    secretAccessKey
})
const uploadS3 = (file) => {
    console.log(file)
    console.log("Caminho do Arquivo: /home/ubuntu/commerce" + file.path)
    // const fileStream = fs.createReadStream("/home/ubuntu/commerce/" + file.path)
    // const uploadParams = {
    //     Bucket: bucket,
    //     Body: fileStream,
    //     Key: file.filename
    // }
    // return s3.upload(uploadParams).promise()
    return {
        location: "A buceta de sua mãe"
    }
}



exports.uploadFile = uploadS3