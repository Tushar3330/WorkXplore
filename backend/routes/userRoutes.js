import express from "express";
import { register, login, logout, updateProfile } from "../controllers/userController.js";
import  {isAuthenticated}  from "../middlewares/authentication.js";
import { singleupload } from "../middlewares/multer.js";

 
const router = express.Router();

router.route("/register").post( singleupload, register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthenticated,singleupload,updateProfile);

export default router;