import {ref} from "vue";

export const sidebarMenus = ref([
    {
        menu_name: 'sidebar.dashboard',
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
    {
        menu_name: 'Apps',
        menus: [
            {
                name: 'CRM',
                icon: 'fa-light fa-user-headset',
                sub_menus: [
                    {
                        name: 'Target Audience',
                        link_name: 'crm_audience'
                    },
                    {
                        name: 'Company',
                        link_name: 'crm_company'
                    },
                    {
                        name: 'Task',
                        link_name: 'crm_task'
                    },
                    {
                        name: 'Leads',
                        link_name: 'crm_leads'
                    },
                    {
                        name: 'Customer',
                        link_name: 'crm_customer'
                    },
                ]
            },
            {
                name: 'HRM',
                icon: 'fa-light fa-user-tie',
                sub_menus: [
                    {
                        name: 'Add Employee',
                        link_name: 'hrm_add_employee'
                    },
                    {
                        name: 'All Employee',
                        link_name: 'hrm_all_employee'
                    },
                    {
                        name: 'Attendance',
                        link_name: 'hrm_attendance'
                    },
                ]
            },
            {
                name: 'Ecommerce',
                icon: 'fa-light fa-cart-shopping-fast',
                sub_menus: [
                    {
                        name: 'All Customer',
                        link_name: 'all_customer'
                    },
                    {
                        name: 'Add Product',
                        link_name: 'add_product'
                    },
                    {
                        name: 'All Product',
                        link_name: 'all_product'
                    },
                    {
                        name: 'Category',
                        link_name: 'category'
                    },
                    {
                        name: 'Order',
                        link_name: 'order'
                    },
                ]
            },
            {
                name: 'Calendar',
                link_name: 'calendar',
                icon: 'fa-light fa-calendar'
            },
            {
                name: 'Chat',
                link_name: 'chat',
                icon: 'fa-light fa-messages'
            },
            {
                name: 'Email',
                link_name: 'email',
                icon: 'fa-light fa-envelope'
            },
            {
                name: 'Email Templates',
                icon: 'fa-light fa-envelope-open-text',
                menus: [
                    {
                        name: 'Card Declined',
                        link_name: 'card_declined'
                    },
                    {
                        name: 'Promotional',
                        link_name: 'promotion'
                    },
                    {
                        name: 'Subscription Confirm',
                        link_name: 'subscription_confirm'
                    },
                    {
                        name: 'Welcome',
                        link_name: 'welcome_mail'
                    },
                    {
                        name: 'Reset Password',
                        link_name: 'reset_password_mail'
                    },
                ]
            },
            {
                name: 'Invoices',
                link_name: 'invoices',
                icon: 'fa-light fa-file-invoice',
            },
            {
                name: 'Contacts',
                link_name: 'contact',
                icon: 'fa-light fa-user-plus',
            },
        ]
    },
    {
        menu_name: 'Pages',
        menus: [
            {
                name: 'Authentication',
                icon: 'fa-light fa-user-cog',
                sub_menus: [
                    {
                        name: 'Login 01',
                        link_name: 'login'
                    },
                    {
                        name: 'Login 02',
                        link_name: 'login_2'
                    },
                    {
                        name: 'Login 03',
                        link_name: 'login_3'
                    },
                    {
                        name: 'Registration 01',
                        link_name: 'registration'
                    },
                    {
                        name: 'Registration 02',
                        link_name: 'registration_2'
                    },
                    {
                        name: 'Reset Password',
                        link_name: 'reset_password'
                    },
                    {
                        name: 'Update Password',
                        link_name: 'update_password'
                    },
                    {
                        name: 'Login Status',
                        link_name: 'login_status'
                    },
                    {
                        name: 'Account Deactivated',
                        link_name: 'account_deactivated'
                    },
                    {
                        name: 'Welcome',
                        link_name: 'welcome'
                    },
                    {
                        name: 'Verify Email',
                        link_name: 'email_verify'
                    },
                    {
                        name: '2 Factor Verification',
                        link_name: 'two_factor'
                    },
                    {
                        name: 'Multi Step Signup',
                        link_name: 'multi_step_signup'
                    },
                ]
            },
            {
                name: 'Error Pages',
                icon: 'fa-light fa-triangle-exclamation',
                sub_menus: [
                    {
                        name: 'Error 400',
                        link_name: 'error_400'
                    },
                    {
                        name: 'Error 403',
                        link_name: 'error_403'
                    },
                    {
                        name: 'Error 404',
                        link_name: 'error_404'
                    },
                    {
                        name: 'Error 408',
                        link_name: 'error_408'
                    },
                    {
                        name: 'Error 500',
                        link_name: 'error_500'
                    },
                    {
                        name: 'Error 503',
                        link_name: 'error_503'
                    },
                    {
                        name: 'Error 504',
                        link_name: 'error_504'
                    },
                ]
            },
            {
                name: 'User',
                icon: 'fa-light fa-user',
                sub_menus: [
                    {
                        name: 'View Profile',
                        link_name: 'view_profile'
                    },
                    {
                        name: 'Edit Profile',
                        link_name: 'edit_profile'
                    },
                ]
            },
            {
                name: 'Additional',
                icon: 'fa-light fa-square-plus',
                sub_menus: [
                    {
                        name: 'Coming Soon 01',
                        link_name: 'coming_soon'
                    },
                    {
                        name: 'Coming Soon 02',
                        link_name: 'coming_soon_2'
                    },
                    {
                        name: 'Pricing Table 01',
                        link_name: 'pricing_table'
                    },
                    {
                        name: 'Pricing Table 02',
                        link_name: 'pricing_table_2'
                    },
                    {
                        name: 'Under Construction',
                        link_name: 'under_construction'
                    },
                ]
            },
            {
                name: 'Utility',
                link_name: 'utility',
                icon: 'fa-light fa-layer-group'
            }
        ]
    },
    {
        menu_name: 'Components',
        menus: [
            {
                name: 'Advance UI',
                icon: 'fa-light fa-layer-group',
                sub_menus: [
                    {
                        name: 'Sweet Alert',
                        link_name: 'sweet_alert'
                    },
                    {
                        name: 'Nestable List',
                        link_name: 'nestable_list'
                    },
                    {
                        name: 'Animation',
                        link_name: 'animation'
                    },
                    {
                        name: 'Swiper Slider',
                        link_name: 'swiper_slider'
                    },
                ]
            },
            {
                name: 'Forms',
                link_name: 'form',
                icon: 'fa-light fa-memo-pad'
            },
            {
                name: 'Tables',
                link_name: 'table',
                icon: 'fa-light fa-table'
            },
            {
                name: 'Charts',
                link_name: 'charts',
                icon: 'fa-light fa-chart-simple'
            },
            {
                name: 'Icon',
                link_name: 'icon',
                icon: 'fa-light fa-compass-drafting'
            },
            {
                name: 'Map',
                link_name: 'map',
                icon: 'fa-light fa-location-dot'
            },
            {
                name: 'File Manager',
                link_name: 'file_manager',
                icon: 'fa-light fa-folder-open'
            },
            {
                name: 'Multiple Level',
                icon: 'fa-light fa-layer-group',
                sub_menus: [
                    {
                        name: 'Level 1',
                        link_name: null,
                    },
                    {
                        name: 'Level 2',
                        sub_menus: [
                            {
                                name: 'Level 2.1',
                                link_name: null,
                            },
                            {
                                name: 'Level 2.2',
                                sub_menus: [
                                    {
                                        name: 'Level 2.2.1',
                                        link_name: null,
                                    },
                                    {
                                        name: 'Level 2.2.2',
                                        link_name: null,
                                    },
                                ]
                            },
                            {
                                name: 'Level 2.3',
                                link_name: null,
                            },
                            {
                                name: 'Level 2.4',
                                link_name: null,
                            },
                        ]
                    },
                    {
                        name: 'Level 3',
                        link_name: null,
                    },
                ]
            }
        ]
    }
])