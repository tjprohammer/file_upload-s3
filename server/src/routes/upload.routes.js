const { Router } = require("express");
const { upload } = require("../controllers/upload.controller");
const { verifyFile } = require("../middlewares/verifyFile");
const router = Router();

router.post("/upload", verifyFile, upload);

module.exports = router;
