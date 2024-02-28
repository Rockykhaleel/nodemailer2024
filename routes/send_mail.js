const express = require("express");

const controller = require("../controller/emailcontroller");

const router = express.Router();

router.post("/emailsending", controller.register);

module.exports = router;
