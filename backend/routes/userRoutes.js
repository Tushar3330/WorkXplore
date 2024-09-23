import express from "express";
import { register, login, logout, updateProfile } from "../controllers/userController.js";
import  {isAuthenticated}  from "../middlewares/authentication.js";

 
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthenticated,updateProfile);

export default router;