const db = require("../models");

// Defining methods for the jobController
module.exports = {

  create: (req, res) => {
    db.TimeSheet
      .create(req.body)
      .then(data => res.status(200).json(data))
      .catch(err => res.status(422).json(err));
  },

  read: (req, res) => {
    // console.log(req.body)
    db.TimeSheet
    .find(req.body)
    .then( data => res.status(200).json(data))
    // .then( associates => {
    //   const runUntil = associates.length
    //   let newData = []

    //   associates.forEach( assoc => {
    //     const { _id, user_id, title, salary } = assoc
    //     db.Users
    //     .find({ _id: user_id })
    //     .then( userData => {
    //       const user = userData[0]
    //       const { name, email, phone, address } = user
    //       let newUser = { user_id, name, email, phone, address, assoc_id: _id, title, salary }
    //       newData.push(newUser)
    //       if(runUntil === newData.length) res.json(newData)
    //     })
    //     .catch( err => res.status(422).json(err))
    //   })
    // })
    .catch( error => {
      res.status(422).json(error)
    })
    // db.TimeSheet
    //   .find(req.body).sort()
    //   .then(data => res.status(200).json(data))
    //   .catch(err => res.status(422).json(err));
  },

  //   read_date_range: (req, res) => {
  //     const { start, end } = req.body
  //     db.TimeSheet
  //       .find({
  //         createdAt: { "$gte": start, "$lt": end}
  //       }).sort({ createdAt: -1 })
  //       .then(data => res.status(200).json(data))
  //       .catch(err => res.status(500).json(err));
  //   },

  //   read_latest: (req, res) => {
  //     db.TimeSheet
  //       .find(req.body).sort({ started: -1 }).limit(5)
  //       .then(data => res.status(200).json(data))
  //       .catch(err => res.status(422).json(err));
  //   },

  //   read_false: (req, res) => {
  //     db.TimeSheet
  //       .find({ status: false }).sort({ started: -1 })
  //       .then(data => res.status(200).json(data))
  //       .catch(err => res.status(422).json(err));
  //   },

  read_id: (req, res) => {
    const { _id } = req.params
    db.TimeSheet
      .find({ _id })
      .then(data => res.status(200).json(data))
      .catch(err => res.status(500).json(err));
  },

  update: (req, res) => {
    const { _id } = req.body
    db.TimeSheet
      .findOneAndUpdate({ _id }, { $set: req.body })
      .then(data => res.status(200).json(data))
      .catch(err => res.status(422).json(err))
  },

  delete: (req, res) => {
    db.TimeSheet
      .findOneAndRemove({ _id: req.body._id })
      .then(data => res.status(200).json(data))
      .catch(err => res.status(422).json(err));
  },
};
