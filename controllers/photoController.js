const db = require("../models");

// Routes
// =============================================================
module.exports = {

  // GET route for getting all of the Photoss
  findAll: function(req, res) {
    // Add sequelize code to find all Photoss, and return them to the user with res.json
    db.Photos
    .findAll({})
    .then(results => res.json(results))
  },

  // Get route for retrieving a single Photos
  findById: function(req, res) {
    // Add sequelize code to find a single Photos where the id is equal to req.params.id,
    // return the result to the user with res.json
    db.Photos
    .findOne({
      where:req.params.id
    })
    .then(results => res.json(results))
    
  },


  // Photos route for saving a new Photos
  create: function(req, res) {
    // Add sequelize code for creating a Photos using req.body,
    // then return the result using res.json
    db.Photos.create(
      req.body
    ).then(dbPhotoss => res.json(dbPhotoss))
  },

  // DELETE route for deleting Photoss
  remove: function(req, res) {
    // Add sequelize code to delete a Photos where the id is equal to req.params.id, 
    // then return the result to the user using res.json
    db.Photos
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(Photos => res.json(Photos))
    
  },

  // PUT route for updating Photoss
  remove: function(req, res) {
    // Add code here to update a Photos using the values in req.body, where the id is equal to
    // req.body.id and return the result to the user using res.json
    db.Photos.update({
      text: req.body.text
    }, {
      where: {
        id: req.body.id
      }
    })
    .then(Photos => res.json(Photos))
  }
};