export const adminRoutes = [
    {
        path: '/admin/login',
        component: () => import('@/Admin/views/pages/authentication/Login.vue'),
        name: 'adminLogin',
        meta: { layout: 'GuestLayout' },
    },
    {
        path: '/admin/dashboard',
        component: () => import('@/Admin/views/pages/Dashboard.vue'),
        name: 'adminDashboard',
        meta: { layout: 'AdminLayout', isPartials: true, isAdmin: true },
    },
    {
        path: '/admin/companies',
        component: () => import('@/Admin/views/pages/CompanyList.vue'),
        name: 'companyList',
        meta: { layout: 'AdminLayout', isPartials: true, isAdmin: true },
    },
]