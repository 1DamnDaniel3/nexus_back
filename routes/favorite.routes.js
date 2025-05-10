import express from 'express'

import { authMiddleware } from '../middleware/authMiddleware.js';
import { baseFavoritesController } from '../controllers/index.js'

const router = express.Router();

//CRUD
router.post('/favorites/registration', authMiddleware, (req, res) => baseFavoritesController.create(req, res));
router.get('/favorites', authMiddleware, (req, res) => baseFavoritesController.getAll(req, res));
router.get('/favorites/getOne/:id', authMiddleware, (req, res) => baseFavoritesController.getOne(req, res));
router.put('/favorites/:id', authMiddleware, (req, res) => baseFavoritesController.updateData(req, res));
router.delete('/favorites/:id', authMiddleware, (req, res) => baseFavoritesController.delete(req, res));

//ANOTHER ROUTES

router.post('/favorites/findUserFav', authMiddleware, (req, res) => baseFavoritesController.findUserFavorites(req, res));


export { router };
