import { prisma } from "../../prisma/client";
import bcrypt from "bcrypt";
import validator from "validator";

//Register new user
export const registerUser = async (email: string, password: string) => {

  if(!email || !password) {
    throw new Error("All fields must be filled.")
  }

  if (!validator.isEmail(email)) {
    throw new Error("Email is not valid.")
  }

  if (!validator.isStrongPassword(password)) {
    throw new Error("Password is not strong enough.")
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

};
