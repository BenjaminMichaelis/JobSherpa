module.exports = app => {
    const wips = require("../controllers/wip.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Wip
    router.post("/", wips.create);
  
    // Retrieve all Wips
    router.get("/", wips.findAll);
  
    // Retrieve all published Wips
    router.get("/published", wips.findAllPublished);
  
    // Retrieve a single Wip with id
    router.get("/:id", wips.findOne);
  
    // Update a Wip with id
    router.put("/:id", wips.update);
  
    // Delete a Wip with id
    router.delete("/:id", wips.delete);
  
    // Delete all Wips
    router.delete("/", wips.deleteAll);
  
    app.use('/api/wips', router);
  };