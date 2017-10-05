const router = require("express").Router();
const postsController = require("../../controllers/postsController.js");
const db = require("./models");

router.get("/", function(req,res){
    db.media_db
})

module.exports = router;