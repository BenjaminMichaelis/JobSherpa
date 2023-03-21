const db = require("../models");
const Wip = db.wips;
const Op = db.Sequelize.Op;

// Create and Save a new Wip
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Wip
    const wip = {
      title: req.body.title,
      description: req.body.description,
      published: req.body.published ? req.body.published : false
    };
  
    // Save Wip in the database
    Wip.create(wip)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Wip."
        });
      });
  };

// Retrieve all Wips from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Wip.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving wips."
        });
      });
  };

// Find a single Wip with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Wip.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Wip with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Wip with id=" + id
        });
      });
  };

// Update a Wip by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Wip.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Wip was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Wip with id=${id}. Maybe Wip was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Wip with id=" + id
        });
      });
  };

// Delete a Wip with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Wip.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Wip was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Wip with id=${id}. Maybe Wip was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Wip with id=" + id
        });
      });
  };

// Delete all Wips from the database.
exports.deleteAll = (req, res) => {
    Wip.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Wips were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all wips."
        });
      });
  };

// Find all published Wips
exports.findAllPublished = (req, res) => {
    Wip.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving wips."
        });
      });
  };