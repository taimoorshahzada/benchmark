import { blockContent } from "./schemas/blockContent";
import { category } from "./schemas/category";
import { post } from "./schemas/post";
import { author } from "./schemas/author";
import { homepage } from "./schemas/homepage";

export const schema = {
  types: [homepage, post, author, category, blockContent],
};
