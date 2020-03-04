const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Flows.findAll().then(function(p) {
      res.json(p)
    })
  },
  findById: function(req, res) {
    db.Flows.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(p) {
      res.json(p)
    })
  },
  create: function(req, res) {
    db.Flows.create(req.body).then(function(p) {
      res.json(p)     
    })

  },
  update: function(req, res, next) {
    db.Flows.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function(p) {
      res.json(p)
    }).catch(next)
  },
  remove: function(req, res) {
    db.Flows.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(p) {
      res.json(p)
    })
  }
};
