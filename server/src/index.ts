import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import checkAuth from "./middleware";
import userRouter from "./routers/userRouter";

dotenv.config();

const app: Express = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({
    ok: true,
  });
});

app.use("/api/user", userRouter)

app.listen(4000, () => {
  console.log("im wokring");
});
