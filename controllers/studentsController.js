const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Students.findAll().then(function (p) {
      res.json(p)
    })
  },
  findById: function (req, res, next) {
    db.Students.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (p) {
      res.json(p)
    }).catch(next)
  },
  create: function (req, res) {
    db.Students.create(req.body).then(function (p) {
      res.json(p)
    }).catch(err => {
      res.status(500).end();
    });
  },
  update: function (req, res) {
    db.Students.findOne({ where: { id: req.params.id } }).then(student => {
      student.update(req.body).then(p => {
        res.json(p)
      })
    }).catch(() => {
      res.status(404).end();
    })
  },
  remove: function (req, res) {
    db.Students.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (p) {
      res.json(p)
    })
  }, authenticate: function (req, res) {

    if (req.user) {
      res.sendStatus(200, "/html/admin")
    }

  }
};
