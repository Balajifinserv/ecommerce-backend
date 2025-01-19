import express from 'express';
import { register, login, googleAuth } from '../controllers/authController.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', verifyToken, register);
router.post('/login', verifyToken, login);
router.post('/google', verifyToken, googleAuth);

export default router;
