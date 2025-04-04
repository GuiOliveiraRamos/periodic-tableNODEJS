import express from 'express';
import { handleElement, handleOff } from '../controllers/elementController.js';

const router = express.Router();

router.post('/element/:symbol', handleElement); // Ex: /element/H
router.post('/off', handleOff);

export default router;