export const about_info = {
    name: 'about_info',
    title: 'About Info',
    type: 'document',
    fields: [
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'over_the_years',
            title: 'Over the Years',
            type: 'text',
        },
        {
            name: 'accordions',
            title: 'Accordions',
            type: 'array',
            of: [{type: 'about_accordion'}],
        },
        {
            name: 'team_description',
            title: 'Our Team Description',
            type: 'text',
        },
        {
            name: 'staff_members',
            title: 'Staff Members',
            type: 'array',
            of: [{type: 'staff_member'}],
        },
    ],
}
