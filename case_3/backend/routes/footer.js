var express = require("express");
var router = express.Router();
const footerController = require("../controllers/footer");

router.get("/", footerController.get);

module.exports = router;
