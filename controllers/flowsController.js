const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Flows.findAll().then(function (p) {
      res.json(p)
    })
  },
  findById: function (req, res) {
    db.Flows.findOne({
      where: {
        flowID: req.params.id
      }
    }).then(function (p) {
      res.json(p)
    })
  },
  create: function (req, res) {
    db.Flows.create(req.body).then(function (p) {
      res.json(p)
    })

  },
  update: function (req, res, next) {
    db.Flows.update(req.body, {
      where: {
        flowID: req.params.id
      }
    }).then(function (p) {
      res.json(p)
    }).catch(next)
  },
  remove: function (req, res) {
    db.Flows.destroy({
      where: {
        flowID: req.params.id
      }
    }).then(function (p) {
      res.json(p)
    })
  },
  populate: function (req, res) {
    db.Flows.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (p) {
      console.log(req.body)
      db.FlowsPoses.bulkCreate(req.body).then(function (p) {
        res.json(p)
      }).catch(err => {
        console.log(err);
        res.status(500).end()
      })
    }).catch(err => {
      console.log(err);
      res.status(404).end()
    })

  }, playFlow: function (req, res) {
    db.FlowsPoses.findAll({
      where: {
        FlowId: req.params.id
      }, order: [
        ['flowPosition', 'ASC']
      ],
      include: [{model:db.Poses}]
    })
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        console.log(err);
        res.status(404).end()
      })



      // findAll({
      //   where:{id:shopId}, 
      //   include:[
      //       { model:ShopAd, as:'ads', 
      //         where:{ 
      //               is_valid:1, 
      //               is_vertify:1},   
      //         required:false
      //         }
      //       ]
      //    })
  }
}
