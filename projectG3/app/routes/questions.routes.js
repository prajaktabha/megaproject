module.exports = app => {
    const questions = require("../controllers/questions.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    // router.post("/", questions.create);
  router.post("/",questions.insert);
    //Retrieve all Tutorials
    router.get("/", questions.findAll);

    // router.get("/:id", questions.findOne);
  
    app.use('/api/questions', router);
  };