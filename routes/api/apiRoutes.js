const router = require("express").Router();
const artController = require("../../controllers/artController.js");
const musicController = require("../../controllers/musicController.js");
const photoController = require("../../controllers/photoController.js");
const videoController = require("../../controllers/videoController.js");
const writingController = require("../../controllers/writingController.js");

router.route("/art")
.get(artController.findAll)
.post(artController.create);

router.route("/music")
.get(musicController.findAll)
.post(musicController.create);

router.route("/photo")
.get(photoController.findAll)
.post(photoController.create);

router.route("/video")
.get(videoController.findAll)
.post(videoController.create);

router.route("/writing")
    .get(writingController.findAll)
    .post(writingController.create);

module.exports = router;