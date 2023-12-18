import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      username: string;
    }
  }
}

export default function checkAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  // console.log(token)
  // console.log("I'm callled")

  if (token === null) {
    return res.status(401).json({error:"Jsonwebtoken is not found!"});
  }

  jwt.verify(
    token as string,
    process.env.JWT_SECRET as string,
    (err: any, username: any) => {
      if (err) {
        return res.status(403);
      }

      req.username = username;
      next();
    }
  );
}
