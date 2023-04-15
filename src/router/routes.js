
const routes = [
  {
    path: '/admin/dashboard',
    component: () => import('pages/admin/index.vue'),
  },
  {
    path: '/',
    component: () => import('../layouts/GDLayout.vue'),
    // children: [
    //   { path: '', component: () => import('pages/IndexPage.vue') }
    // ]
  },
  // {
  //   path: '/about',
  //   component: () => import('../pages/About/index.vue'),
    
  // },
  {
    path: '/admin/login',
    component: () => import('../pages/Auth/Login.vue'),
    
  },
  {
    path: '/services',
    component: () => import('../pages/ErrorNotFound.vue'),
    
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
