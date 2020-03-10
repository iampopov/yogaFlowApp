const db = require("../models");

module.exports = {
  
  bulkCreate: function(req, res) {
    db.FlowsPoses.bulkCreate(req.body).then(function(p) {
      res.json(p)     
    })

  }
};
