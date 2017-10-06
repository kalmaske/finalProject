const db = require("../models");

// Routes
// =============================================================
module.exports = {

  // GET route for getting all of the Videos
  findAll: function(req, res) {
    // Add sequelize code to find all Videos, and return them to the user with res.json
    db.Video
    .findAll({})
    .then(results => res.json(results))
  },

  // Get route for retrieving a single Video
  findById: function(req, res) {
    // Add sequelize code to find a single Video where the id is equal to req.params.id,
    // return the result to the user with res.json
    db.Video
    .findOne({
      where:req.params.id
    })
    .then(results => res.json(results))
    
  },


  // Video route for saving a new Video
  create: function(req, res) {
    // Add sequelize code for creating a Video using req.body,
    // then return the result using res.json
    db.Video.create(
      req.body
    ).then(dbVideos => res.json(dbVideos))
  },

  // DELETE route for deleting Videos
  remove: function(req, res) {
    // Add sequelize code to delete a Video where the id is equal to req.params.id, 
    // then return the result to the user using res.json
    db.Video
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(Video => res.json(Video))
    
  },

  // PUT route for updating Videos
  remove: function(req, res) {
    // Add code here to update a Video using the values in req.body, where the id is equal to
    // req.body.id and return the result to the user using res.json
    db.Video.update({
      text: req.body.text
    }, {
      where: {
        id: req.body.id
      }
    })
    .then(Video => res.json(Video))
  }
};