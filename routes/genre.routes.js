import express from 'express'

import { authMiddleware } from '../middleware/authMiddleware.js';
import { baseGenresController } from '../controllers/index.js'

const router = express.Router();

//CRUD
router.post('/genres/registration', authMiddleware, (req, res) => baseGenresController.create(req, res));
router.get('/genres', (req, res) => baseGenresController.getAll(req, res));
router.get('/genres/getOne/:id', authMiddleware, (req, res) => baseGenresController.getOne(req, res));
router.put('/genres/:id', authMiddleware, (req, res) => baseGenresController.updateData(req, res));
router.delete('/genres/:id', authMiddleware, (req, res) => baseGenresController.delete(req, res));

//ANOTHER ROUTES



export { router };
