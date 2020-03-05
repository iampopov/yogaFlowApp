import axios from "axios";

export default {
  // Gets all books
  uploadFile: function(file) {
      console.log(file)
    return axios.post("/api/s3",file);
  }
};
