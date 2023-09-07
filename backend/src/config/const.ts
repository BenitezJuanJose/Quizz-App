import dotenv from "dotenv";

dotenv.config({
  path: `${process.cwd()}/src/.env.local`
});

export const JWTSecret = process.env.JWTSecret;
export const PORT = process.env.PORT;
