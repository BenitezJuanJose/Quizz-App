import { authenticateJWT, authenticateLogin, authenticateRegister } from "@middlewares/passport";
import sessionController from "@controllers/session.controller";
import { Router } from "express";

const router = Router();

router.post("/login", authenticateLogin(), sessionController.login);
router.post("/register", authenticateRegister(), sessionController.register);
// This route is for test protected endpoints
router.get("/protected", authenticateJWT(), sessionController.protected);

export default router;
