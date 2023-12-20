import { Request, Response } from "express";

//login user
export const loginUser = (req: Request, res: Response) => {
  res.json({
    msg: "login user",
  });
};

//signup user
export const signupUser = (req: Request, res: Response) => {
  res.json({
    msg: "signup user",
  });
};
