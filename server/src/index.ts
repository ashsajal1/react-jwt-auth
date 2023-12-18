import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import checkAuth from "./middleware";

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

app.post("/api/login", (req: Request, res: Response) => {
  const { username, password } = req.body;
//   console.log(username, password);
//   console.log(process.env.JWT_SECRET as string);

  if (username === "admin" && password === "123") {
    // generate token
    const token = jwt.sign({ username }, process.env.JWT_SECRET as string, {
      expiresIn: "1h",
    });

    return res.json({ token });
  }

  res.status(401).send("Not valid credentials!");
});

app.get("/api/protected", checkAuth, (req: Request, res: Response) => {
    res.json({
        data: "This is private data!",
        username: req.username
    })
});

app.listen(4000, () => {
  console.log("im wokring");
});
