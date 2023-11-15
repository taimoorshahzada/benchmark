export const project = {
	name: "project",
	title: "All Projects",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: { source: "name" },
		},
		{
			name: "description",
			title: "Description",
			type: "text",
		},
		{
			title: "Features",
			name: "features",
			type: "array",
			of: [{ type: "string" }],
		},
		{
			title: "Points of Interest",
			name: "interest_points",
			type: "array",
			of: [{ type: "string" }],
		},
		{
			name: "landscape_hero",
			title: "Landscape Hero Image",
			type: "image",
		},
		{
			name: "portrait_hero",
			title: "Portrait Hero Image",
			type: "image",
		},
		{
			name: "hero_display",
			title: "Hero Main Display Image",
			type: "string",
			options: {
				list: ["Landscape", "Portrait"],
			},
		},
		{
			name: "images",
			title: "Display Images",
			type: "array",
			of: [{ type: "image" }],
		},
	],
};