const db = require("../models");

// Defining methods for the jobController
module.exports = {

  create: (req, res) => {
    db.Users
      .create(req.body)
      .then(data => res.status(200).json(data))
      .catch(err => res.status(422).json(err));
  },

  read: (req, res) => {
    db.Users
      .find(req.body).sort()
      .then(data => res.status(200).json(data))
      .catch(err => res.status(422).json(err));
  },

  readId: (req, res) => {
    db.Users
      .find({ _id: req.body })
      .then(data => {
        // console.log(data)
        res.status(200).json(data)
      })
      .catch(err => res.status(500).json(err));
  },

  update: (req, res) => {
    const { _id } = req.body
    db.Users
      .findOneAndUpdate({ _id }, { $set: req.body })
      .then(data => res.status(200).json(data))
      .catch(err => res.status(422).json(err))
  },

  delete: (req, res) => {
    db.Users
      .findOneAndRemove({ _id: req.body._id })
      .then(data => res.status(200).json(data))
      .catch(err => res.status(422).json(err));
  },
};
