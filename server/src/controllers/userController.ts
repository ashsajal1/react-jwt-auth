import { Request, Response } from "express";
import { createToken, doLoginUser, doRegisterUser } from "../models/userModel";

//login user
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = await req.body;
  try {
    const loggedInUser = await doLoginUser(email, password);

    //create a token
    const token = createToken(loggedInUser.id);

    res.status(200).json({
      ok: true,
      message: "User successfully logged in!",
      token,
    });
  } catch (error: any) {
    return res.status(401).json({
      ok: false,
      error: error.message,
    });
  }
};

//signup user
export const signupUser = async (req: Request, res: Response) => {
  const { email, password } = await req.body;
  // console.log(email, password);

  try {
    const newUser = await doRegisterUser(email, password);

    //create a token
    const token = createToken(newUser.id);

    res.status(201).json({
      ok: true,
      message: "User successfully registered!",
      token,
    });
  } catch (error: any) {
    return res.status(409).json({
      ok: false,
      error: error.message,
    });
  }
};
