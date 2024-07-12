export const adminRoutes = [
    {
        path: '/admin/test',
        component: () => import('@/Admin/views/pages/test.vue'),
        name: 'adminTest',
        meta: { layout: 'AdminLayout', isPartials: true },
    },
]