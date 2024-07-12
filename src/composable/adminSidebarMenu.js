import {ref} from "vue";

export const adminSidebarMenus = ref([
    {
        menu_name: 'File Manager',
        menus: [
            {
                name: 'sidebar.ecommerce',
                link_name: 'dashboard_index',
                icon: 'fa-light fa-cart-shopping-fast'
            },
            {
                name: 'sidebar.crm',
                link_name: 'crm_dashboard',
                icon: 'fa-light fa-user-headset'
            },
            {
                name: 'sidebar.hrm',
                link_name: 'hrm_dashboard',
                icon: 'fa-light fa-user-tie'
            },
        ]
    },
])