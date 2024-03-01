import express from "express";
import {
  registerController,
  loginController,
  forgotPasswordController,
 

  
} from "../Controllers/authController.js";
import {isAdmin, requireSignIn } from "../middleware/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);





//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);


export default router;