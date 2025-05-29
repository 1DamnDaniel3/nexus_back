import express from 'express'

import { authMiddleware } from '../middleware/authMiddleware.js';
import { baseReportController } from '../controllers/index.js'

const router = express.Router();

//CRUD
router.post('/reports/registration', authMiddleware, (req, res) => baseReportController.create(req, res));
router.get('/reports', authMiddleware, (req, res) => baseReportController.getAll(req, res));
router.get('/reports/getOne/:id', authMiddleware, (req, res) => baseReportController.getOne(req, res));
router.put('/reports/:id', authMiddleware, (req, res) => baseReportController.updateData(req, res));
router.delete('/reports/:id', authMiddleware, (req, res) => baseReportController.delete(req, res));

//ANOTHER ROUTES



export { router };
