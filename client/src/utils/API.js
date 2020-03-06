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
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    },

    createNewUser:async function (user) {
        console.log(user)
        return axios.post("/api/students/", user);
    },

    pullPoses: function () {
     return axios.get("/api/poses/")  
    }
};

