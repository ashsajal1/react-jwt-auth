import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";
import { prisma } from "../../prisma/client";

declare global {
  namespace Express {
    interface Request {
      user: any;
    }
  }
}

export default async function requireAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  // console.log(token)

  if (token === null) {
    return res.status(401).json({ error: "Jsonwebtoken is not found!" });
  }

  jwt.verify(
    token as string,
    process.env.JWT_SECRET as string,
    async (err: any, userId: any) => {
      if (err) {
        return res.status(403).json({
          error: "Request is not authorized.",
        });
      }

      const user = await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });

      req.user = user?.id;
      next();
    }
  );
}
