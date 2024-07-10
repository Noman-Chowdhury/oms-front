import {ref} from "vue";

export const list = ref([
    {name: 'Item 1.1', children: [{name: 'Item 2.1'}, {name: 'Item 2.3'}]},
    {name: 'Item 1.2', children: [{name: 'Item 2.1'}, {name: 'Item 2.2'}, {name: 'Item 2.3'}]},
    {name: 'Item 1.3', children: [{name: 'Item 3.1'}, {name: 'Item 3.2'}, {name: 'Item 3.3'}]},
    {name: 'Item 1.4', children: []}
]);

export const listThree = ref([
    { name: 'Item 1.0' },
    { name: 'Item 1.1', children: [{ name: 'Item 2.1' }] },
    { name: 'Item 1.2', children: [{ name: 'Item 2.3' },{ name: 'Item 2.1' }, { name: 'Item 2.2' }, { name: 'Item 2.3' }] },
    { name: 'Item 1.3', children: [{ name: 'Item 3.1' }, { name: 'Item 3.2' }, { name: 'Item 3.3' }] },
    { name: 'Item 1.4' },
])

export const folderTeamData = ref([
    {
        section_title: 'Folder',
        section_type: 'folder',
        dragableData: [
            {name: 'css', icon: 'fa-solid fa-folder-open', children: [{name: 'style.css', icon: 'fa-brands fa-css3'}, {name: 'style.min.css', icon: 'fa-brands fa-css3'}]},
            {name: 'images', icon: 'fa-solid fa-folder-open', children: [{name: 'fa-regular logo.png', icon: 'fa-regular fa-image'}, {name: 'fa-regular avatar.png', icon: 'fa-image'}, {name: 'product.jpg', icon: 'fa-regular fa-image'}]},
            {name: 'js', icon: 'fa-solid fa-folder-open', children: [{name: 'main.js', icon: 'fa-brands fa-square-js'}, {name: 'main.min.js', icon: 'fa-brands fa-square-js'}, {name: 'plugin.js', icon: 'fa-brands fa-square-js'}]},
            {name: 'index.html', icon: 'fa-solid fa-folder-open'},
        ]
    },
    {
        section_title: 'Team Nested List',
        section_type: 'team',
        dragableData: [{
            name: 'Shaikh Abu Dardah',
            position: 'Managing Director',
            avatar: new URL('/src/assets/images/admin.png', import.meta.url),
            type: 'team',
            children: [
                {
                    name: 'Leo Sims',
                    position: 'Project Manager',
                    avatar: new URL('/src/assets/images/avatar-2.png', import.meta.url),
                    type: 'team',
                    children: [
                        {
                            name: 'Jasmine Fletcher',
                            position: 'UI/UX Designer',
                            avatar: new URL('/src/assets/images/avatar-4.png', import.meta.url),
                            type: 'team'
                        },
                        {
                            name: 'Lilly Ford',
                            position: 'UI/UX Designer',
                            avatar: new URL('/src/assets/images/avatar-5.png', import.meta.url),
                            type: 'team'
                        },
                        {
                            name: 'Dylan Parkin',
                            position: 'Front End Developer',
                            avatar: new URL('/src/assets/images/avatar-6.png', import.meta.url),
                            type: 'team'
                        },
                        {
                            name: 'Megan Hawkins',
                            position: 'Front End Developer',
                            avatar: new URL('/src/assets/images/avatar-3.png', import.meta.url),
                            type: 'team'
                        },
                    ],
                },
                {
                    name: 'Naomi Jennings',
                    position: 'Project Manager',
                    avatar: new URL('/src/assets/images/avatar-3.png', import.meta.url),
                    type: 'team',
                    children: [
                        {
                            name: 'Michael Morgan',
                            position: 'Laravel Developer',
                            avatar: new URL('/src/assets/images/avatar-2.png', import.meta.url),
                            type: 'team'
                        },
                        {
                            name: 'Ryan Chapman',
                            position: 'PHP Developer',
                            avatar: new URL('/src/assets/images/avatar-4.png', import.meta.url),
                            type: 'team'
                        },
                        {
                            name: 'Hayden Bull',
                            position: 'Wordpress Developer',
                            avatar: new URL('/src/assets/images/avatar-5.png', import.meta.url),
                            type: 'team'
                        },
                    ],
                },
            ],
        }]
    },
])