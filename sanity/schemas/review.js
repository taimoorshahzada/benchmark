export const review = {
	name: "review",
	title: "Review",
	type: "object",
	fields: [
		{
			name: "reviewer",
			title: "Reviewer Name",
			type: "string",
		},
		{
			name: "review",
			title: "Review",
			type: "text",
		},
	],
	preview: {
		select: {
			title: "reviewer",
		},
	},
};
