import axios from "axios";

export default {
    // Gets all books


    uploadFile: async function (file) {

        axios({
            method: 'post',
            url: "/api/s3",
            data: file,
            headers: {
                'Content-Type': 'multipart/form-data', 
                "processData": false,
                "contentType": false,
                "cache": false,
                "timeout": 600000,
            }
        }).then(res=>{
            console.log("worked?")
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })


        // return axios.post("/api/s3", file);
    }
};

