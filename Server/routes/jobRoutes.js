import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
const router = express.Router();
//routes
router.post(
  "/create-job",
  requireSignIn,
  isAdmin,

  createJobController
);

export default router;
