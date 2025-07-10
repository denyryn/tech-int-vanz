var express = require("express");
var router = express.Router();
const aboutController = require("../controllers/about");

router.get("/", aboutController.get);

module.exports = router;
