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
                icon: 'fa-light fa-cart-shopping-fast',
                permissions: ['show employee list', 'add new employee', 'show employee details', 'edit employee']
            },
            {
                name: 'Users',
                link_name: 'users',
                icon: 'fa-solid fa-users',
                permissions: ['show user list', 'add new user', 'edit user', 'delete user']
            },
            {
                name: 'Attendances',
                link_name: 'attendances',
                icon: 'fa-solid fa-users',
                permissions: ['show attendance list']
            },
            {
                name: 'Leaves',
                link_name: 'leaves',
                icon: 'fa-solid fa-users',
                permissions: ['show leave application list', 'leave application approval']
            },
            {
                name: 'Payrolls',
                link_name: 'payrolls',
                icon: 'fa-solid fa-users',
                permissions: ['show payroll list', 'add new payroll', 'show payroll details']
            },
            {
                name: 'Calender',
                link_name: 'calendar',
                icon: 'fa-solid fa-users',
                permissions: ['show calender']
            },
            {
                name: 'Settings',
                icon: 'fa-light fa-home',
                sub_menus: [
                    {
                        name: 'Company Settings',
                        link_name: 'companySettings',
                        permissions: ['update company basic settings','update company general settings','update company holiday settings']

                    },
                    {
                        name: 'Other Settings',
                        link_name: 'otherSettings',
                        permissions: ['show department list','add new department','edit department','delete department','show designation list','add new designation','edit designation','delete designation','show shift list','add new shift','edit shift','delete shift','show leave type list','add new leave type','edit leave type','delete leave type']
                    },
                ],
                permissions: ['update company basic settings','update company general settings','update company holiday settings','show department list','add new department','edit department','delete department','show designation list','add new designation','edit designation','delete designation','show shift list','add new shift','edit shift','delete shift','show leave type list','add new leave type','edit leave type','delete leave type']
            },
            {
                name: 'Access Control',
                link_name: 'roles',
                icon: 'fa-solid fa-users',
            },
        ],
        menu_name_disable: true
    },
])