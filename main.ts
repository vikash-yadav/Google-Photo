var AWS = require("aws-sdk");
AWS.config.update({accesKeyId:'AKIA3PL3WK5VXEJP44HU', secretAccessKey: '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 ', region:'us-east-1'});
var s3 = new AWS.S3();

var params = {
  Bucket: "profile-images.test.com",
  Delimiter: "/",
 };

s3.listObjects(params, function (err, data) {
  if (err) throw err;
  console.log(data);
});
