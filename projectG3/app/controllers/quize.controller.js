const db = require("../models");
const quizes = db.quize;

const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
   // Validate request
   if (!req.body.categoryid) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const cat = {
    quizname: req.body.quizname,
    time: req.body.time,
    count: req.body.count,
    categoryid: req.body.categoryid
  };

  // Save Tutorial in the database
  quizes.create(cat)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};


// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    quizes.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
};



exports.findAll = (req, res) => {
    const quizname = req.query.quizname;
    var condition = quizname ? { quizname: { [Op.like]: `%${quizname}%` } } : null;
  
    quizes.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };
