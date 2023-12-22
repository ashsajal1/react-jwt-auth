import { Request, Response } from "express";
import { getPostsByAuthorId, getTenPosts } from "../models/postsModel";

export const getPost = async (req: Request, res: Response) => {
  try {
    const posts = await getTenPosts();
    res.status(200).json({
      ok: true,
      posts,
    });
  } catch (error: any) {
    res.status(401).json({
      error: error.message,
    });
  }
};

export const getPostOfAuthor = async (req: Request, res: Response) => {
  const { authorId } = req.body;
  try {
    const posts = await getPostsByAuthorId(authorId);
    res.status(200).json({
      ok: true,
      posts,
    });
  } catch (error: any) {
    res.status(401).json({
      error: error.message,
    });
  }
};
