const express = require("express");
const { getpost, createpost } = require("../controller/posts.js");
const router = express.Router();

//routes

router.get("/", getpost);
router.post("/", createpost);

//exporting router
module.exports = router;
