const db = require("../models");
const moment = require('moment')
const path = require("path");
const PDFDocument = require('pdfkit');
const fs = require('fs');

// const font = require('../documents/fonts');
// const img = require('../documents/artihaus.png');

// Defining methods for the jobController
module.exports = {

  create: (req, res) => {
    // console.log(req.body)
    // db.Expenses
    //   .create(req.body)
    //   .then(data => res.status(200).json(data))
    //   .catch(err => res.status(422).json(err));
  },

  read: (req, res) => {
    // console.log(req.body)
    db.Expenses
      .find(req.body).sort({ date: -1 })
      .then(data => res.status(200).json(data))
      .catch(err => res.status(422).json(err));
  },

  //   read_date_range: (req, res) => {
  //     const { start, end } = req.body
  //     db.Expenses
  //       .find({
  //         createdAt: { "$gte": start, "$lt": end}
  //       }).sort({ createdAt: -1 })
  //       .then(data => res.status(200).json(data))
  //       .catch(err => res.status(500).json(err));
  //   },

  //   read_latest: (req, res) => {
  //     db.Expenses
  //       .find(req.body).sort({ started: -1 }).limit(5)
  //       .then(data => res.status(200).json(data))
  //       .catch(err => res.status(422).json(err));
  //   },

  //   read_false: (req, res) => {
  //     db.Expenses
  //       .find({ status: false }).sort({ started: -1 })
  //       .then(data => res.status(200).json(data))
  //       .catch(err => res.status(422).json(err));
  //   },

  update: (req, res) => {
    db.Expenses
      .findOneAndUpdate({ _id: req.body._id }, { $set: req.body })
      .then(data => res.status(200).json(data))
      .catch(err => res.status(422).json(err))
  },

  delete: (req, res) => {
    db.Expenses
      .findOneAndRemove({ _id: req.body._id })
      .then(data => res.status(200).json(data))
      .catch(err => res.status(422).json(err));
  },
};
