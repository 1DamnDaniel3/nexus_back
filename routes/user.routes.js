import express from 'express'

import { authMiddleware } from '../middleware/authMiddleware.js';
import {
    baseUserController, loginController, userBooksController,
    userFavoritesController, baseUserAccountController
} from '../controllers/index.js'

const router = express.Router();

//CRUD
router.post('/users/registration', (req, res) => baseUserController.create(req, res));
router.get('/users', authMiddleware, (req, res) => baseUserAccountController.getAll(req, res));
router.get('/users/:id', authMiddleware, (req, res) => baseUserAccountController.getOne(req, res));
router.put('/users/:id', (req, res) => baseUserAccountController.updateData(req, res));
router.delete('/users/:id', authMiddleware, (req, res) => baseUserAccountController.delete(req, res));

//ANOTHER ROUTES
router.post('/users/login', (req, res) => loginController.userLogin(req, res));// login
router.post('/users/logout', (req, res) => loginController.userLogout(req, res));// logout

router.post('/users/getBooks', authMiddleware, (req, res) => userBooksController.getUserBooks(req, res));// getBooks
router.post('/users/getFavorites', authMiddleware, (req, res) => userFavoritesController.getUserFavorites(req, res));// getFavorites

export { router };
