const AWS = require("aws-sdk");


const s3 = new AWS.S3({
    accessKeyId: process.env.REACT_APP_AMAZONACCESSKEY,
    secretAccessKey: process.env.REACT_APP_AMAZONSECRETACCESSKEY
});


module.exports = {
    uploadFile: function (req, res) {
        console.log("got in the call")
        console.log(req.files.files.data)
        if (!req.files) {
            return res.status(400).send("No file was uploaded.");
        }

        const uploadFile = req.files.files;
        console.log(uploadFile)
        const params = {
            Body: uploadFile.data, // data from uploaded file
            Bucket: "yogaflowapp", // bucket name
            Key: `audios/${Date.now()}-${uploadFile.name}` // file name to use for S3 bucket
        };

        s3.upload(params, (err, response) => {
            if (err) throw err;
    
            console.log(`File uploaded successfully at ${response.Location}`);
            // terminating the req/res cycle by sending a JSON object with the uploaded
            // file path AND any date sent along with the upload... this is where you 
            // could write to your db if needed, now that you have the url path for the
            // newly uploaded file!
            res.json({ url: response.Location, data: req.body });
        })

    }

}

// app.post("/upload", async (req, res) => {
//     // Sending error back if no file was uploaded
//     if (!req.files) {
//         return res.status(400).send("No file was uploaded.");
//     }

//     // references the file uploaded from the input field with the 'name' attribute specified following 'req.files.'
//     const uploadFile = req.files.upload;

//     // setting up S3 upload parameters
//     const params = {
//         Body: uploadFile.data, // data from uploaded file
//         Bucket: keys.s3bucket, // bucket name
//         Key: `${Date.now()}-${uploadFile.name}` // file name to use for S3 bucket
//     };

//     // uploading file to the bucket
//     s3.upload(params, (err, response) => {
//         if (err) throw err;

//         console.log(`File uploaded successfully at ${response.Location}`);
//         // terminating the req/res cycle by sending a JSON object with the uploaded
//         // file path AND any date sent along with the upload... this is where you 
//         // could write to your db if needed, now that you have the url path for the
//         // newly uploaded file!
//         res.json({ url: response.Location, data: req.body });
//     });
// });
