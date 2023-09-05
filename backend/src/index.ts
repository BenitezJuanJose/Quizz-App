import express from "express";
import router from "@routes/index.route";

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", router);

const server = app.listen(8080, () => {
  const address = server.address();
  const port = (typeof address !== "string" && address?.port) ?? 8080;
  console.log(`Server is listening in http://localhost:${port}/`);
});
