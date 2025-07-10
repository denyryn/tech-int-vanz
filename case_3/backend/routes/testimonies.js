var express = require("express");
var router = express.Router();
const testimonyController = require("../controllers/testimony");

router.get("/", testimonyController.get);

module.exports = router;
