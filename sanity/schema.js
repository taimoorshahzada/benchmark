import { blockContent } from "./schemas/blockContent";
import { category } from "./schemas/category";
import { post } from "./schemas/post";
import { author } from "./schemas/author";
import { homepage } from "./schemas/homepage";
import { selectedProjectsSections } from "./schemas/selected-projects-sections"
import { project } from "./schemas/project"
import { showhome } from "./schemas/showhome"
import { openTimes } from "./schemas/open-times";
import { upcomingProject } from "./schemas/upcoming-project";

export const schema = {
  types: [selectedProjectsSections, project, showhome, upcomingProject, openTimes, homepage, post, author, category, blockContent],
};
