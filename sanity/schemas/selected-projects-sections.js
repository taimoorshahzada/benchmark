export const selectedProjectsSections = {
	name: "selected-projects",
	title: "Selected Projects Sections",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "mainImageCol",
			title: "Main Image Column",
			type: "string",
			options: {
				list: ["First", "Second", "Third"],
			},
		},
		{
			name: "mainImageTitle",
			title: "Main Image Title",
			type: "string",
		},
		{
			title: "Main Project",
			name: "mainProject",
			type: "reference",
			to: [{ type: "project" }],
		},
		{
			name: "mainImage",
			title: "Main Image",
			type: "image",
		},
		{
			name: "Image1Title",
			title: "Image 1 Title",
			type: "string",
		},
		{
			title: "First Project",
			name: "firstProject",
			type: "reference",
			to: [{ type: "project" }],
		},
		{
			name: "image1",
			title: "Image 1",
			type: "image",
		},
		{
			name: "Image2Title",
			title: "Image 2 Title",
			type: "string",
		},
		{
			title: "Second Project",
			name: "secondProject",
			type: "reference",
			to: [{ type: "project" }],
		},
		{
			name: "image2",
			title: "Image 2",
			type: "image",
		},
	],
};

