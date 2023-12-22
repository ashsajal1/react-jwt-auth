import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import checkAuth from "./middleware/requireAuth";
import userRouter from "./routers/userRouter";
import postsRouter from "./routers/postsRouter";
import requireAuth from "./middleware/requireAuth";

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

app.use("/api/posts", requireAuth, postsRouter)
app.use("/api/user", userRouter)

app.listen(4000, () => {
  console.log("im wokring");
});
