import express from 'express'

import { authMiddleware } from '../middleware/authMiddleware.js';
import { baseDeliveryController } from '../controllers/index.js'

const router = express.Router();

//CRUD
router.post('/delivery/registration', authMiddleware, (req, res) => baseDeliveryController.create(req, res));
router.get('/delivery', (req, res) => baseDeliveryController.getAll(req, res));
router.get('/delivery/getOne/:id', authMiddleware, (req, res) => baseDeliveryController.getOne(req, res));
router.put('/delivery/:id', authMiddleware, (req, res) => baseDeliveryController.updateData(req, res));
router.delete('/delivery/:id', authMiddleware, (req, res) => baseDeliveryController.delete(req, res));

//ANOTHER ROUTES



export { router };
