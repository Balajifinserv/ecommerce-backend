import express from 'express';
import {
  createOrder,
  getOrders,
  getOrder,
  updateOrderStatus,
} from '../controllers/orderController.js';
import { verifyToken, isAdmin } from '../middleware/auth.js';

const router = express.Router();

router.use(verifyToken); // All order routes require authentication

router.post('/', createOrder);
router.get('/', getOrders);
router.get('/:id', getOrder);
router.put('/:id/status', isAdmin, updateOrderStatus);

export default router;
