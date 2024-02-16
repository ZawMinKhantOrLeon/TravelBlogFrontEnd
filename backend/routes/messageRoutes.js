let router= require("express").Router();
let messageController = require("../controllers/messageController");

router.post("/create",messageController.create);

module.exports = router;