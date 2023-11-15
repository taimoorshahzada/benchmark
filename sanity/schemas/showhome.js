export const showhome = {
	name: "showhome",
	title: "Showhomes",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
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
		{
			name: "showhome_times",
			title: "Showhome Times",
			type: "array",
			of: [{ type: "openTimes" }],
		},
		{
			name: "address",
			title: "Address",
			type: "string",
		},
	],
};