var AWS = require("aws-sdk");
//AWS.config.update({accesKeyId:'AccessKey', secretAccessKey: 'SecretKey', region:'us-east-1'});
var s3 = new AWS.S3();

/**
 * var params = {
  Bucket: "profile-images.test.com",
  Delimiter: "/",
 };
 
 */

s3.listBuckets(function (err, data) {
  if (err) {
    console.log("Error", err);
   } else {
     console.log("Success", data.Buckets);
        }
});
