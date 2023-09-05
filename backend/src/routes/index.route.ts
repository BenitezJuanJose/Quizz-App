import { Router } from "express";
import Controller from "@controllers/index.controller";

const router = Router();

router.get("/", Controller.root);

export default router;
