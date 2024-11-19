const db = require("../models");

// Defining methods for the jobController
module.exports = {

  create: (req, res) => {
    db.Associates
      .create(req.body)
      .then(data => res.status(200).json(data))
      .catch(err => res.status(422).json(err));
  },

  read: (req, res) => {
    db.Associates
      .find(req.body)
      .then(data => res.status(200).json(data))
      .catch(err => res.status(422).json(err));
  },

  update: (req, res) => {
    const { _id } = req.body
    db.Associates
      .findOneAndUpdate({ _id }, { $set: req.body })
      .then(data => res.status(200).json(data))
      .catch(err => res.status(422).json(err))
  },

  delete: (req, res) => {
    db.Associates
      .findOneAndRemove({ _id: req.body._id })
      .then(data => res.status(200).json(data))
      .catch(err => res.status(422).json(err));
  },
};
