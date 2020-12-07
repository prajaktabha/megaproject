const db = require("../models");
const questions = db.question;

const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
   // Validate request
   if (!req.body.quizid) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const que = {
    questions: req.body.questions,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    answer: req.body.answer,
    quizid: req.body.quizid,
    typeid: req.body.typeid
  };

  // Save Tutorial in the database
  questions.create(que)
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



exports.findAll = (req, res) => {
    const quizid = req.query.quizid;
    var condition = quizid ? { quizid: { [Op.like]: `%${quizid}%` } } : null;
  
    questions.findAll({ where: condition })
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



