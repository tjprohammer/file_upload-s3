import { Router } from 'express';
import uploadController from '../controllers/upload.controller.js'
const router = Router();

router
	.route("/upload")
	.post(uploadController.uploadFile)
	.put(uploadController.uploadFile)
	.get(uploadController.uploadFile);

export { router as uploadRouter };
