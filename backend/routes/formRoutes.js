import express from 'express';
import { createForm } from '../controllers/formController.js';

const router = express.Router();

router.post('/submit-form', createForm);

export default router;
