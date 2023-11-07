export const upcomingProject = {
    name: "upcoming_project",
    title: "Upcoming Project",
    type: "document",
    fields: [
        {
            name: 'hero_image',
            title: 'Hero Image',
            type: 'image'
        },
        {
            name: 'featured_image_1',
            title: 'Featured Image 1',
            type: 'image'
        },
        {
            name: 'featured_image_2',
            title: 'Featured Image 2',
            type: 'image'
        },
        {
            name: 'images',
            title: 'Display Images',
            type: 'array',
            of: [{type: "image"}]
        },
        {
            name: 'suburb',
            title: 'Suburb',
            type: 'string'
        },
    ],
};