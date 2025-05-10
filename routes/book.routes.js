import express from 'express'

import { authMiddleware } from '../middleware/authMiddleware.js';
import { baseBookController } from '../controllers/index.js'

const router = express.Router();

//CRUD
router.post('/books/registration', authMiddleware, (req, res) => baseBookController.create(req, res));
router.get('/books', (req, res) => baseBookController.getAll(req, res));
router.get('/books/getOne/:id', authMiddleware, (req, res) => baseBookController.getOne(req, res));
router.put('/books/:id', authMiddleware, (req, res) => baseBookController.updateData(req, res));
router.delete('/books/:id', authMiddleware, (req, res) => baseBookController.delete(req, res));

//ANOTHER ROUTES


export { router };
