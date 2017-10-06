const db = require("../models");

// Routes
// =============================================================
module.exports = {

  // GET route for getting all of the writings
  findAll: function(req, res) {
    // Add sequelize code to find all writings, and return them to the user with res.json
    db.writingTable
    .findAll({})
    .then(results => res.json(results))
  },

  // Get route for retrieving a single Writing
  findById: function(req, res) {
    // Add sequelize code to find a single Writing where the id is equal to req.params.id,
    // return the result to the user with res.json
    db.writingTable
    .findOne({
      where:req.params.id
    })
    .then(results => res.json(results))
    
  },


  // Writing route for saving a new Writing
  create: function(req, res) {
    // Add sequelize code for creating a Writing using req.body,
    // then return the result using res.json
    db.writingTable.create(
      req.body
    ).then(dbWritings => res.json(dbWritings))
  },

  // DELETE route for deleting writings
  remove: function(req, res) {
    // Add sequelize code to delete a Writing where the id is equal to req.params.id, 
    // then return the result to the user using res.json
    db.writingTable
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(Writing => res.json(Writing))
    
  },

  // PUT route for updating writings
  remove: function(req, res) {
    // Add code here to update a Writing using the values in req.body, where the id is equal to
    // req.body.id and return the result to the user using res.json
    db.writingTable.update({
      text: req.body.text
    }, {
      where: {
        id: req.body.id
      }
    })
    .then(Writing => res.json(Writing))
  }
};