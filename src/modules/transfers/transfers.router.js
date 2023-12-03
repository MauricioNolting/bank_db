import express from 'express';
import { makeTransfer } from './transfers.controllers.js';

export const router = express.Router();

router.post('/', makeTransfer);
