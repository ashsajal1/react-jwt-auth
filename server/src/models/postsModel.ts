import { prisma } from "../../prisma/client";

export const getTenPosts = async () => {
  try {
    const post = await prisma.posts.findMany({
      take: 10,
    });

    return post;
  } catch (error) {
    throw new Error("Cannot retrieve posts!");
  }
};

export const getPostsByAuthorId = async (id: number) => {
  try {
    const post = await prisma.posts.findMany({
      where: {
        authorId: id,
      },
      take: 10,
    });

    return post;
  } catch (error) {
    throw new Error("Cannot retrieve posts!");
  }
};
