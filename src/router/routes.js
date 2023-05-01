
const routes = [
  {
    path: '/admin/dashboard',
    component: () => import('pages/admin/index.vue'),
  },
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    // children: [
    //   { path: '', component: () => import('pages/IndexPage.vue') }
    // ]
  },
  {
    path: '/main',
    component: () => import('../layouts/GDLayout.vue'),
    
  },
  {
    path: '/admin/login',
    component: () => import('../pages/Auth/Login.vue'),
    
  },
  {
    path: '/test',
    component: () => import('../layouts/PortfolioLayout.vue'),
    
  },
  {
    path: '/team',
    component: () => import('../pages/Team/index.vue'),
    
  },
  {
    path: '/blog',
    component: () => import('../pages/ErrorNotFound.vue'),
    
  },
  {
    path: '/contact',
    component: () => import('../pages/ErrorNotFound.vue'),
    
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
