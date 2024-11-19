const db = require("../models");

// Defining methods for the jobController
module.exports = {

  create: (req, res) => {
    db.Projects
      .create(req.body)
      .then(data => res.status(200).json(data))
      .catch(err => res.status(422).json(err));
  },

  read: (req, res) => {
    db.Projects
      .find(req.body).sort({ started: -1 })
      .then(data => res.status(200).json(data))
      .catch(err => res.status(422).json(err));
  },

  //   read_date_range: (req, res) => {
  //     const { start, end } = req.body
  //     db.Projects
  //       .find({
  //         createdAt: { "$gte": start, "$lt": end}
  //       }).sort({ createdAt: -1 })
  //       .then(data => res.status(200).json(data))
  //       .catch(err => res.status(500).json(err));
  //   },

  //   read_latest: (req, res) => {
  //     db.Projects
  //       .find(req.body).sort({ started: -1 }).limit(5)
  //       .then(data => res.status(200).json(data))
  //       .catch(err => res.status(422).json(err));
  //   },

  //   read_false: (req, res) => {
  //     db.Projects
  //       .find({ status: false }).sort({ started: -1 })
  //       .then(data => res.status(200).json(data))
  //       .catch(err => res.status(422).json(err));
  //   },

  // read_id: (req, res) => {
  //   const { _id } = req.params
  //   db.Projects
  //     .find({ _id })
  //     .then(data => res.status(200).json(data))
  //     .catch(err => res.status(500).json(err));
  // },

  update: (req, res) => {
    const { _id } = req.body
    db.Projects
      .findOneAndUpdate({ _id }, { $set: req.body })
      .then(data => res.status(200).json(data))
      .catch(err => res.status(422).json(err))
  },

  delete: (req, res) => {
    const { _id } = req.body
    db.Projects
      .findOneAndRemove({_id})
      .then(data => res.status(200).json(data))
      .catch(err => res.status(422).json(err));
  },
};
