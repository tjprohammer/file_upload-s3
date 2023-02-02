const { Router } = require("express");
const uploadController = require('../controllers/upload.controller');
const router = Router();

router.post('/upload', uploadController.uploadFile);

module.exports = router;
