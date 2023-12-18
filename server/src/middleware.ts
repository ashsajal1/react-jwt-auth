import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface RequestWithUser extends Request {
  user: {
    username: string;
  };
}

export default function checkAuth(
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token !== null) {
    return res.status(401);
  }

  jwt.verify(token, process.env.JWT_SECRET as string, (err: any, user: any) => {
    if (err) {
      return res.status(403);
    }

    (req.user = user), next();
  });
}
