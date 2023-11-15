import { homepage } from "./schemas/homepage";
import { selectedProjectsSections } from "./schemas/selected-projects-sections";
import { project } from "./schemas/project";
import { showhome } from "./schemas/showhome";
import { openTimes } from "./schemas/open-times";
import { upcomingProject } from "./schemas/upcoming-project";
import { process } from "./schemas/process";
import { walkthrough } from "./schemas/walkthrough";
import { about_info } from "./schemas/about_info";
import { staff_member } from "./schemas/staff_member";
import { about_accordion } from "./schemas/about_accordion";
export const schema = {
	types: [
		homepage,
		selectedProjectsSections,
		project,
		showhome,
		upcomingProject,
		openTimes,
		process,
		walkthrough,
		about_info,
		staff_member,
		about_accordion,
	],
};
