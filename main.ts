var AWS = require("aws-sdk");
AWS.config.update({accesKeyId:'', secretAccessKey: ' ', region:'Asia Pacific (Mumbai) ap-south-1'});
var s3 = new AWS.S3();

var params = {
  Bucket: "profile-images.test.com",
  Delimiter: "/",
  prefix: "",
};

s3.listObjects(params, function (err, data) {
  if (err) throw err;
  console.log(data);
});
