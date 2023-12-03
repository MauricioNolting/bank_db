import express from 'express';
import { router as userRoute } from '../modules/users/user.route.js';
import { router as transferRouter } from '../modules/transfers/transfers.router.js';

export const router = express.Router();

router.use('/users', userRoute);
router.use('/transfers', transferRouter);
