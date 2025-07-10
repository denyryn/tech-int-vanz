var express = require("express");
var router = express.Router();
const productController = require("../controllers/product");

router.get("/", productController.get);

module.exports = router;
