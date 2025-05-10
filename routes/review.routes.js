import express from 'express'

import { authMiddleware } from '../middleware/authMiddleware.js';
import { baseReviewController } from '../controllers/index.js'

const router = express.Router();

//CRUD
router.post('/reviews/registration', authMiddleware, (req, res) => baseReviewController.create(req, res));
router.get('/reviews', (req, res) => baseReviewController.getAll(req, res));
router.get('/reviews/getOne/:id', authMiddleware, (req, res) => baseReviewController.getOne(req, res));
router.put('/reviews/:id', authMiddleware, (req, res) => baseReviewController.updateData(req, res));
router.delete('/reviews/:id', authMiddleware, (req, res) => baseReviewController.delete(req, res));

//ANOTHER ROUTES


export { router };
