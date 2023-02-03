const { Router } = require("express");
const uploadController = require('../controllers/upload.controller');
const router = Router();

router.route('/upload')
    .post(uploadController.uploadFile)
    .put(uploadController.uploadFile)
    .get(uploadController.uploadFile)

module.exports = router;
