module.exports = (app) => {
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new user
  router.post("/", users.create);

  // Retrieve all users

  router.get("/", function (req, res) {
    users.findAll(req, res);
  });

  // Retrieve a single user with id
  router.get("/:id", function (req, res) {
    users.findOne(req, res);
  });

  // Update a user with id
  router.put("/:id", users.update);

  // Delete a user with id
  router.delete("/:id", users.delete);

  // Delete all users
  router.delete("/", users.deleteAll);

  // Login
  router.post("/login", users.login);

  // Register
  router.post("/register", users.register);

  // Retrieve a user's job list with id
  router.get("/:id/jobs", users.getUserJobs);

  app.use("/api/users", router);
};
