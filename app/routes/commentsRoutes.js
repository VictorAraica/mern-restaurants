const { Router } = require("express");
const { postComment } =  require("../controllers/commentsControllers");

const router = Router();


router.post("/api/comment", postComment);

module.exports = router;
