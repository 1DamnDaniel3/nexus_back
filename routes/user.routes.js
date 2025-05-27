import express from 'express'

import { authMiddleware } from '../middleware/authMiddleware.js';
import { baseUserController, loginController, userBooksController } from '../controllers/index.js'

const router = express.Router();

//CRUD
router.post('/users/registration', (req, res) => baseUserController.create(req, res));
router.get('/users', authMiddleware, (req, res) => baseUserController.getAll(req, res));
router.get('/users/:id', authMiddleware, (req, res) => baseUserController.getOne(req, res));
router.put('/users/:id', authMiddleware, (req, res) => baseUserController.updateData(req, res));
router.delete('/users/:id', authMiddleware, (req, res) => baseUserController.delete(req, res));

//ANOTHER ROUTES
router.post('/users/login', (req, res) => loginController.userLogin(req, res));// login
router.post('/users/logout', (req, res) => loginController.userLogout(req, res));// logout

router.post('/users/getBooks', authMiddleware, (req, res) => userBooksController.getUserBooks(req, res));// getBooks

export { router };
