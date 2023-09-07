import type { RequestHandler } from "express";
import passport from "passport";

export const authenticateLogin = (): RequestHandler => passport.authenticate("login", { session: false });
export const authenticateRegister = (): RequestHandler => passport.authenticate("register", { session: false });
export const authenticateJWT = (): RequestHandler => passport.authenticate("jwt", { session: false });
