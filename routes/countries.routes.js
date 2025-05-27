import express from 'express'

import { authMiddleware } from '../middleware/authMiddleware.js';
import { baseCountriesController } from '../controllers/index.js'

const router = express.Router();

//CRUD
router.post('/countries/registration', authMiddleware, (req, res) => baseCountriesController.create(req, res));
router.get('/countries', (req, res) => baseCountriesController.getAll(req, res));
router.get('/countries/getOne/:id', authMiddleware, (req, res) => baseCountriesController.getOne(req, res));
router.put('/countries/:id', authMiddleware, (req, res) => baseCountriesController.updateData(req, res));
router.delete('/countries/:id', authMiddleware, (req, res) => baseCountriesController.delete(req, res));

//ANOTHER ROUTES



export { router };
