import { Router } from "express";
import Controller from "@controllers/index.controller";
import sessionRouter from "./session.route";

const router = Router();

router.use("/", sessionRouter);
router.get("/", Controller.root);

export default router;
