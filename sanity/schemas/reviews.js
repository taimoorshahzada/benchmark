export const reviews = {
	name: "reviews",
	title: "Reviews",
	type: "document",
	fields: [
		{
			name: "reviews",
			title: "Reviews",
			type: "array",
			of: [{ type: "review" }],
		},
	],
	preview: {
		select: {
			title: "Review",
		},
	},
};
