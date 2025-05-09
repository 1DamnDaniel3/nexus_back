import express from 'express'

import { authMiddleware } from '../middleware/authMiddleware.js';
import { baseExchangeController } from '../controllers/index.js'

const router = express.Router();

//CRUD
router.post('/exchanges/registration', authMiddleware, (req, res) => baseExchangeController.create(req, res));
router.get('/exchanges', authMiddleware, (req, res) => baseExchangeController.getAll(req, res));
router.get('/exchanges/getOne/:id', authMiddleware, (req, res) => baseExchangeController.getOne(req, res));
router.put('/exchanges/:id', authMiddleware, (req, res) => baseExchangeController.updateData(req, res));
router.delete('/exchanges/:id', authMiddleware, (req, res) => baseExchangeController.delete(req, res));

//ANOTHER ROUTES

router.get('/exchanges/getExamples', (req, res) => baseExchangeController.exchangeExamples(req, res));


export { router };
