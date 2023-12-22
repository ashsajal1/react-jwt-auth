import { Router } from "express";
import { getPost, getPostOfAuthor } from "../controllers/postsController";
import { getTenPosts } from "../models/postsModel";

const postRouter = Router();

//login route
postRouter.get("/", getPost);

//singup route
postRouter.get("/:authorId", getPostOfAuthor);

export default postRouter;