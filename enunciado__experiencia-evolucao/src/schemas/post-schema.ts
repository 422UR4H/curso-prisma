import { CreatePost } from "../repositories/post-repository";
import JoiBase from "joi";
import JoiDate from "@joi/date";

const Joi = JoiBase.extend(JoiDate);

export const postSchema = Joi.object({
  username: Joi.string().required(),
  title: Joi.string().required(),
  content: Joi.string().required(),
  createdAt: Joi.date().format("YYYY/MM/DD")
});