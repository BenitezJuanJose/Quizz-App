import passport from "passport";
import { ExtractJwt, Strategy as JWTStrategy } from "passport-jwt";
import { Strategy as LocalStrategy } from "passport-local";
import { JWTSecret } from "@config/const";

interface User {
  username: string
  password: string
}

const validUsers: User[] = [
  {
    username: "username",
    password: "password"
  }
];

passport.use(new JWTStrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWTSecret
  },
  (jwt: User, done) => {
    try {
      const user = validUsers.find((user) => user.username === jwt.username && user.password === jwt.password);
      done(null, user);
    } catch (e) {
      done(e);
    }
  }
));

passport.use("login", new LocalStrategy(
  {
    usernameField: "username",
    passwordField: "password"
  },
  (username, password, done) => {
    try {
      const user = validUsers.find((user) => user.username === username && user.password === password);
      done(null, user);
    } catch (e) {
      done(e);
    }
  }
));

passport.use("register", new LocalStrategy(
  {
    usernameField: "username",
    passwordField: "password"
  },
  (username, password, done) => {
    try {
      const user = { username, password };
      validUsers.push(user);
      done(null, user);
    } catch (e) {
      done(e);
    }
  }
));
