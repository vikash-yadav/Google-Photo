var AWS = require("aws-sdk");

var s3 = new AWS.S3();
var params = {
    Bucket: "profile-images.test.com",
    Delimiter: "/"
};
s3.listObjects(params, function (err, data) {
    if (err)
        throw err;
    console.log(data);
});
