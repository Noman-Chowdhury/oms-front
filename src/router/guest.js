export const guestRoutes = [
    {
        path: '/login',
        component: () => import('@/views/pages/authentication/Login.vue'),
        name: 'login',
        meta: { layout: 'GuestLayout' },
    },
    {
        path: '/login-2',
        component: () => import('@/views/pages/authentication/Login-2.vue'),
        name: 'login_2',
        meta: { layout: 'GuestLayout' },
    },
    {
        path: '/login-3',
        component: () => import('@/views/pages/authentication/Login-3.vue'),
        name: 'login_3',
        meta: { layout: 'GuestLayout' },
    },
    {
        path: '/registration',
        component: () => import('@/views/pages/authentication/Registration.vue'),
        name: 'registration',
        meta: { layout: 'GuestLayout' },
    },
    {
        path: '/registration-2',
        component: () => import('@/views/pages/authentication/Registration-2.vue'),
        name: 'registration_2',
        meta: { layout: 'GuestLayout' },
    },
    {
        path: '/reset-password',
        component: () => import('@/views/pages/authentication/ResetPassword.vue'),
        name: 'reset_password',
        meta: { layout: 'GuestLayout' },
    },
    {
        path: '/update-password',
        component: () => import('@/views/pages/authentication/UpdatePassword.vue'),
        name: 'update_password',
        meta: {layout: 'GuestLayout'}
    },
    {
        path: '/login-status',
        component: () => import('@/views/pages/authentication/LoginStatus.vue'),
        name: 'login_status',
        meta: {layout: 'GuestLayout'}
    },
    {
        path: '/account-deactivated',
        component: () => import('@/views/pages/authentication/AccountDeactivated.vue'),
        name: 'account_deactivated',
        meta: {
            layout: 'GuestLayout'
        }
    },
    {
        path: '/welcome',
        component: () => import('@/views/pages/authentication/Welcome.vue'),
        name: 'welcome',
        meta: {layout: 'GuestLayout'}
    },
    {
        path: '/email-verify',
        component: () => import('@/views/pages/authentication/EmailVerify.vue'),
        name: 'email_verify',
        meta: {layout: 'GuestLayout'}
    },
    {
        path: '/two-factor',
        component: () => import('@/views/pages/authentication/TwoFactor.vue'),
        name: 'two_factor',
        meta: {layout: 'GuestLayout'}
    },
    {
        path: '/multi-step-signup',
        component: () => import('@/views/pages/authentication/MultiStepSignup.vue'),
        name: 'multi_step_signup',
        meta: {layout: 'GuestLayout'}
    },
    {
        path: '/coming-soon',
        component: () => import('@/views/pages/additional/ComingSoon.vue'),
        name: 'coming_soon',
        meta: {layout: 'GuestLayout'}
    },
    {
        path: '/coming-soon-2',
        component: () => import('@/views/pages/additional/ComingSoon2.vue'),
        name: 'coming_soon_2',
        meta: {layout: 'GuestLayout'}
    },
    {
        path: '/pricing-table',
        component: () => import('@/views/pages/additional/PricingTable.vue'),
        name: 'pricing_table',
        meta: {layout: 'GuestLayout'}
    },
    {
        path: '/pricing-table-2',
        component: () => import('@/views/pages/additional/PricingTable2.vue'),
        name: 'pricing_table_2',
        meta: {layout: 'GuestLayout'}
    },
    {
        path: '/under-construction',
        component: () => import('@/views/pages/additional/UnderConstruction.vue'),
        name: 'under_construction',
        meta: {layout: 'GuestLayout'}
    },
    {
        path: '/card-declined',
        component: () => import('@/views/pages/authentication/CardDeclined.vue'),
        name: 'card_declined',
        meta: {layout: 'BlankLayout'}
    },
    {
        path: '/promotion',
        component: () => import('@/views/pages/authentication/Promotion.vue'),
        name: 'promotion',
        meta: {layout: 'BlankLayout'}
    },
    {
        path: '/subscription-confirm',
        component: () => import('@/views/pages/authentication/SubscriptionConfirm.vue'),
        name: 'subscription_confirm',
        meta: {layout: 'BlankLayout'}
    },
    {
        path: '/welcome-mail',
        component: () => import('@/views/pages/authentication/WelcomeMail.vue'),
        name: 'welcome_mail',
        meta: {layout: 'BlankLayout'}
    },
    {
        path: '/reset-password-mail',
        component: () => import('@/views/pages/authentication/ResetPasswordMail.vue'),
        name: 'reset_password_mail',
        meta: {layout: 'BlankLayout'}
    },
];