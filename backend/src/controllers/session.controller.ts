import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWTSecret } from "@config/const";

class Controller {
  login (req: Request, res: Response, next: NextFunction): void {
    try {
      if (req.user !== undefined) {
        const token = jwt.sign(req.user, JWTSecret as string, { expiresIn: 3600 });
        res.json({ status: 200, message: "You have logued succesfully", data: token });
      }
    } catch (error) {
      next(error);
    }
  }

  register (req: Request, res: Response, next: NextFunction): void {
    try {
      if (req.user !== undefined) {
        const token = jwt.sign(req.user, JWTSecret as string, { expiresIn: 3600 });
        res.json({ status: 200, message: "You have registered succesfully", data: token });
      }
    } catch (error) {
      next(error);
    }
  }

  protected (req: Request, res: Response, next: NextFunction): void {
    try {
      res.json({
        status: 200,
        message: "You've reached this endpoint succesfully"
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new Controller();
