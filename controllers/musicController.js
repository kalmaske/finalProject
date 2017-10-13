const db = require("../models");

// Routes
// =============================================================
module.exports = {

  // GET route for getting all of the Musics
  findAll: function(req, res) {
    // Add sequelize code to find all Musics, and return them to the user with res.json
    db.musicTable
    .findAll({})
    .then(results => res.json(results))
  },

  // Get route for retrieving a single Music
  findById: function(req, res) {
    // Add sequelize code to find a single Music where the id is equal to req.params.id,
    // return the result to the user with res.json
    db.musicTable
    .findOne({
      where:req.params.id
    })
    .then(results => res.json(results))
    
  },


  // Music route for saving a new Music
  create: function(req, res) {
    // Add sequelize code for creating a Music using req.body,
    // then return the result using res.json
    db.musicTable.create(
      req.body
    ).then(dbMusics => res.json(dbMusics))
  },

  // DELETE route for deleting Musics
  remove: function(req, res) {
    // Add sequelize code to delete a Music where the id is equal to req.params.id, 
    // then return the result to the user using res.json
    db.musicTable
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(Music => res.json(Music))
    
  },

  // PUT route for updating Musics
  put: function(req, res) {
    // Add code here to update a Music using the values in req.body, where the id is equal to
    // req.body.id and return the result to the user using res.json
    db.musicTable.update({
      text: req.body.text
    }, {
      where: {
        id: req.body.id
      }
    })
    .then(Music => res.json(Music))
  }
};