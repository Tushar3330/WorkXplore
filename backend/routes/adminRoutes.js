import express from 'express';
import { isAuthenticated } from '../middlewares/authentication.js';
import { createAdmin, createUser, deleteUser, getAllUsers } from '../controllers/adminController.js';

const router = express.Router();

// Get all students and recruiters
router.route("/users").get( getAllUsers);

router.route("/users").post( createUser);

router.route("/users/:id").get( deleteUser);

router.route("/create").post( createAdmin);
// Delete a user

export  default router;