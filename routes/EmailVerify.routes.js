import express from 'express'

import { authMiddleware } from '../middleware/authMiddleware.js';
import { emailVerifyController } from '../controllers/index.js'

const router = express.Router();

router.post('/auth/send-code', (req, res) => emailVerifyController.sendCode(req, res));
router.post('/auth/confirm-code', (req, res) => emailVerifyController.confirmCode(req, res));


export { router };
