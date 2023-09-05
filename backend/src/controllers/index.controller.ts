import type { Request, Response } from "express";

class Controller {
  root (req: Request, res: Response): void {
    res.status(200).json({ status: 200, message: "The api is working correctly" });
  }
}

export default new Controller();
