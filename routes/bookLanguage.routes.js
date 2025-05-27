import express from 'express'

import { authMiddleware } from '../middleware/authMiddleware.js';
import { baseLanguageController } from '../controllers/index.js'

const router = express.Router();

//CRUD
router.post('/languages/registration', authMiddleware, (req, res) => baseLanguageController.create(req, res));
router.get('/languages', (req, res) => baseLanguageController.getAll(req, res));
router.get('/languages/getOne/:id', authMiddleware, (req, res) => baseLanguageController.getOne(req, res));
router.put('/languages/:id', authMiddleware, (req, res) => baseLanguageController.updateData(req, res));
router.delete('/languages/:id', authMiddleware, (req, res) => baseLanguageController.delete(req, res));

//ANOTHER ROUTES



export { router };
