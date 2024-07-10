export const errorPageRoutes = [
    {
        path: '/error-400',
        component: () => import('@/views/pages/error/Error400.vue'),
        name: 'error_400',
        meta: {layout: 'GuestLayout'}
    },
    {
        path: '/error-403',
        component: () => import('@/views/pages/error/Error403.vue'),
        name: 'error_403',
        meta: {layout: 'GuestLayout'}
    },
    {
        path: '/error-404',
        component: () => import('@/views/pages/error/Error404.vue'),
        name: 'error_404',
        meta: {layout: 'GuestLayout'}
    },
    {
        path: '/error-408',
        component: () => import('@/views/pages/error/Error408.vue'),
        name: 'error_408',
        meta: {layout: 'GuestLayout'}
    },
    {
        path: '/error-500',
        component: () => import('@/views/pages/error/Error500.vue'),
        name: 'error_500',
        meta: {layout: 'GuestLayout'}
    },
    {
        path: '/error-503',
        component: () => import('@/views/pages/error/Error503.vue'),
        name: 'error_503',
        meta: {layout: 'GuestLayout'}
    },
    {
        path: '/error-504',
        component: () => import('@/views/pages/error/Error504.vue'),
        name: 'error_504',
        meta: {layout: 'GuestLayout'}
    },
]