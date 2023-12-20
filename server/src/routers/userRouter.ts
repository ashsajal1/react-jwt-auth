import { Router } from "express";
import { loginUser, signupUser } from "../controllers/userController";

const userRouter = Router();

//login route
userRouter.post("/login", loginUser)

//singup route
userRouter.post("/signup", signupUser)

export default userRouter;