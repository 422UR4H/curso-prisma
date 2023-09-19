import { Post } from "@prisma/client";
import prisma from "../database/database";

export type CreatePost = Omit<Post, "id">
export type UpdatePost = CreatePost;

async function getPosts() {
  const result = await prisma.post.findMany();
  return result;
}

async function getPost(id: number) {
  const result = await prisma.post.findFirst({ where: { id } });
  return result;
}

async function createPost(post: CreatePost) {
  const { username, title, content } = post;
  const result = await prisma.post.create({ data: { username, title, content } });
  return result;
}

async function deletePost(id: number) {
  const result = await prisma.post.delete({ where: { id } });
  return result;
}

async function updatePost(id: number, post: UpdatePost) {
  const { username, title, content } = post;
  const result = await prisma.post.update({
    where: { id },
    data: { username, title, content }
  });
  return result;
}

const postRepository = {
  getPost,
  getPosts,
  createPost,
  deletePost,
  updatePost
}

export default postRepository;