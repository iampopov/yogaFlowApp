const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Poses.findAll().then(function(p) {
      res.json(p)
    })
  },
  findById: function(req, res) {
    db.Poses.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(p) {
      res.json(p)
    })
  },
  create: function(req, res) {
    db.Poses.create(req.body).then(function(p) {
      res.json(p)     
    })

  },
  update: function(req, res, next) {
    db.Poses.update({
      where: {
        id: req.params.id
      }
    }).then(function(p) {
      res.json(p)
    }).catch(next)
  },
  remove: function(req, res) {
    db.Poses.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(p) {
      res.json(p)
    })
  }
};
