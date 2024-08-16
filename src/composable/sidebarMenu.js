import {ref} from "vue";

export const userSidebarMenus = ref([
    {
        menu_name: 'sidebar.dashboard',
        menus: [
            {
                name: 'sidebar.dashboard',
                link_name: 'dashboard_index',
                icon: 'fa-light fa-cart-shopping-fast'
            },
            {
                name: 'All Employee',
                link_name: 'all_employee',
                icon: 'fa-light fa-cart-shopping-fast'
            },
            {
                name: 'Users',
                link_name: 'users',
                icon: 'fa-solid fa-users'
            },
            {
                name: 'Attendances',
                link_name: 'attendances',
                icon: 'fa-solid fa-users'
            },
            {
                name: 'Settings',
                icon: 'fa-light fa-home',
                sub_menus: [
                    {
                        name: 'Company Settings',
                        link_name: null
                    },
                    {
                        name: 'Other Settings',
                        link_name: 'otherSettings'
                    },
                ]
            },
        ],
        menu_name_disable: true
    },
])