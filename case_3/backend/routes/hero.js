var express = require("express");
var router = express.Router();
const heroController = require("../controllers/hero");

router.get("/", heroController.get);

module.exports = router;
