var AWS = require("aws-sdk");

AWS.config.update({ region: "REGION" });

const s3 = new AWS.S3({apiVersion: '2006-03-01'});

var uploadParams = { Bucket: process.argv[2], Key: "", Body: "" };

var file = process.argv[3];

var fs = require("fs");
var fileStream = fs.createReadStream(file);
fileStream("error", function (err) {
  console.log("File Error", err);
});

uploadParams.Body = fileStream;
var path = require('path');

uploadParams.Key = path.basename(file);

s3.upload(uploadParams, function(err,data) {
if(err) {
    console.log("Error", err);
    {
        if (data){
            console.log("Upload Success", data.Location );
        }
    }
}
});