const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Teachers.findAll().then(function(p) {
      res.json(p)
    })
  },
  findById: function(req, res, next) {
    db.Teachers.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(p) {
      res.json(p)
    }).catch(next)
  },
  create: function(req, res) {
    db.Teachers.create(req.body).then(function(p) {
      res.json(p)     
    })
  },
  update: function(req, res) {
    db.Teachers.findOne({ where: { id: req.params.id } }).then(teacher => {
      teacher.update(req.body).then(p => {
        res.json(p)
      })
    }).catch(() => {
      res.status(404).end();
    })
  },
  remove: function(req, res) {
    db.Teachers.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(p) {
      res.json(p)
    })
  }
};
