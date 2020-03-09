import axios from "axios";

export default {
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
    },

    pullTeachers: function () {
     return axios.get("/api/teachers/")  
    },
    pullFlows: function() {
      return axios.get("/api/flows/")  
    },
    createNewFlow:async function(params) {
        //console.log(params);
        return axios.post("/api/flows", params)
    },
    createNewFlowPose:async function(id, body) {
       console.log(id);
       
        console.log(body);
        //console.log(params[0].flowId);
        return axios.post(`/api/flows/poses/${id}`, body)
    },
    getFlow: function() {
        return axios.get("/api/flows")
    }
};

