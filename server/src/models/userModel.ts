import { prisma } from "../../prisma/client";
import bcrypt from "bcrypt";

//Register new user
export const registerUser = async (email: string, password: string) => {
  const existedUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (existedUser) {
    throw new Error("User already exist!");
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
