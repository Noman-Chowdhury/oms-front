import {ref} from "vue";

export const userSidebarMenus = ref([
    {
        menu_name: 'sidebar.dashboard',
        menus: [
            {
                name: 'sidebar.dashboard',
                link_name: 'dashboard_index',
                icon: 'fa-solid fa-house'
            },
            {
                name: 'All Employee',
                link_name: 'all_employee',
                icon: 'fa-solid fa-user-group',
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
                icon: 'fa-solid fa-calendar-check',
                permissions: ['show attendance list']
            },
            {
                name: 'Leaves',
                link_name: 'leaves',
                icon: 'fa-solid fa-file-lines',
                permissions: ['show leave application list', 'leave application approval']
            },
            {
                name: 'Payrolls',
                link_name: 'payrolls',
                icon: 'fa-solid fa-wallet',
                permissions: ['show payroll list', 'add new payroll', 'show payroll details']
            },
            {
                name: 'Calender',
                link_name: 'calendar',
                icon: 'fa-solid fa-calendar-days',
                permissions: ['show calender']
            },
            {
                name: 'Settings',
                icon: 'fa-solid fa-gears',
                sub_menus: [
                    {
                        name: 'Company Settings',
                        link_name: 'companySettings',
                        permissions: ['update company basic settings','update company general settings','update company holiday settings'],
                        icon: 'fa-solid fa-gear',

                    },
                    {
                        name: 'Other Settings',
                        link_name: 'otherSettings',
                        permissions: ['show department list','add new department','edit department','delete department','show designation list','add new designation','edit designation','delete designation','show shift list','add new shift','edit shift','delete shift','show leave type list','add new leave type','edit leave type','delete leave type'],
                        icon: 'fa-solid fa-wrench',
                    },
                ],
                permissions: ['update company basic settings','update company general settings','update company holiday settings','show department list','add new department','edit department','delete department','show designation list','add new designation','edit designation','delete designation','show shift list','add new shift','edit shift','delete shift','show leave type list','add new leave type','edit leave type','delete leave type']
            },
            {
                name: 'Access Control',
                link_name: 'roles',
                icon: 'fa-solid fa-users',
                permissions: ['show role list', 'add new role', 'edit role', 'delete role']
            },
        ],
        menu_name_disable: true
    },
])