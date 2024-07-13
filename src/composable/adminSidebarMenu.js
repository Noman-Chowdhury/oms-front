import {ref} from "vue";

export const adminSidebarMenus = ref([
    {
        menu_name: 'Admin Panel',
        menus: [
            {
                name: 'Dashboard',
                link_name: 'adminDashboard',
                icon: 'fa-light fa-home'
            },
            {
                name: 'Company',
                link_name: 'companyList',
                icon: 'fa-light fa-home'
            }
        ],
        menu_name_disable: true
    },
])