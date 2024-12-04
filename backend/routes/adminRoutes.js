import express from 'express';
import { createAdmin, createUser, deleteUser, getAdminJobs, getAllUsers, getAppliedJobs } from '../controllers/adminController.js';

const router = express.Router();

// Get all students and recruiters
router.route("/get/:studentId").get( getAppliedJobs);

router.route("/getjobs/:recruiterId").get( getAdminJobs);


router.route("/users").get( getAllUsers);

router.route("/users").post( createUser);

router.route("/users/delete/:id").get( deleteUser);

router.route("/create").post( createAdmin);
// Delete a user

export default router;