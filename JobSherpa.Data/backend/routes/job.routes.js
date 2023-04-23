module.exports = (app) => {
  const jobs = require("../controllers/job.controller.js");

  const router = require("express").Router();

  // Create a new job
  router.post("/", jobs.create);

  // Retrieve all jobs for a user
  router.get("/:userId", function (req, res) {
    jobs.findAllByUserId(req, res);
  });

  // Other routes can be added here in the future

  app.use("/api/jobs", router);
};
