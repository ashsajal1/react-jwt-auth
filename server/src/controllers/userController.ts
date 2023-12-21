import { Request, Response } from "express";
import { registerUser } from "../models/userModel";

//login user
export const loginUser = (req: Request, res: Response) => {
  res.json({
    msg: "login user",
  });
};

//signup user
export const signupUser = async (req: Request, res: Response) => {
  const { email, password } = await req.body;
  // console.log(email, password);

  try {
    const newUser = await registerUser(email, password);

    res.status(201).json({
      ok: true,
      msg: "User successfully registered!",
      user: newUser,
    });
  } catch (error: any) {
    return res.status(409).json({
      ok: false,
      msg: error.message,
    });
  }
};
