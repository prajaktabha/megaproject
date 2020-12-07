module.exports = app => {
    const categories = require("../controllers/category.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", categories.create);
  
    //Retrieve all Tutorials
    router.get("/", categories.findAll);
  
  
    app.use('/api/categories', router);
  };