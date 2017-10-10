const db = require("../models");

// Routes
// =============================================================
module.exports = {

  // GET route for getting all of the Arts
  findAll: function(req, res) {
    // Add sequelize code to find all Arts, and return them to the user with res.json
    db.artTable
    .findAll({})
    .then(results => res.json(results))
  },

  // Get route for retrieving a single Art
  findById: function(req, res) {
    // Add sequelize code to find a single Art where the id is equal to req.params.id,
    // return the result to the user with res.json
    db.artTable
    .findOne({
      where:req.params.id
    })
    .then(results => res.json(results))
    
  },


  // Art route for saving a new Art
  create: function(req, res) {
    // Add sequelize code for creating a Art using req.body,
    // then return the result using res.json
    db.artTable.create(
      req.body
    ).then(dbArts => res.json(dbArts))
  },

  // DELETE route for deleting Arts
  remove: function(req, res) {
    // Add sequelize code to delete a Art where the id is equal to req.params.id, 
    // then return the result to the user using res.json
    db.artTable
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(Art => res.json(Art))
    
  },

  // PUT route for updating Arts
  put: function(req, res) {
    // Add code here to update a Art using the values in req.body, where the id is equal to
    // req.body.id and return the result to the user using res.json
    db.artTable.update({
      text: req.body.text
    }, {
      where: {
        id: req.body.id
      }
    })
    .then(Art => res.json(Art))
  }
};