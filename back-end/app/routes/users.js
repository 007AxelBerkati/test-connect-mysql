import express from 'express';
import { findAll } from '../controllers/users.controllers.js';

const router = express.Router();

// Retrieve all users
router.get('/users', findAll);

export default router;
