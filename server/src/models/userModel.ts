import { prisma } from "../../prisma/client";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";

export const createToken = (id: number) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET as string, {
    expiresIn: "3d",
  });
};

//Register new user
export const doRegisterUser = async (email: string, password: string) => {
  if (!email || !password) {
    throw new Error("All fields must be filled.");
  }

  if (!validator.isEmail(email)) {
    throw new Error("Email is not valid.");
  }

  if (!validator.isStrongPassword(password)) {
    throw new Error("Password is not strong enough.");
  }
  const existedUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (existedUser) {
    throw new Error("Email already in use.");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const createdUser = await prisma.user.create({
    data: {
      email: email,
      passowrd: hashedPassword,
    },
  });

  return createdUser;
};

//login method
export const doLoginUser = async (email: string, password: string) => {
  if (!email || !password) {
    throw new Error("All fields must be filled.");
  }

  const existedUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!existedUser) {
    throw new Error("Invalid credentials.");
  }

  const matchedPassword = await bcrypt.compare(password, existedUser.passowrd);

  if (!matchedPassword) {
    throw new Error("Invalid credentials!");
  }

  return existedUser;
};
