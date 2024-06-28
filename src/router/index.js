import { useUserStore } from '@/stores/user'
import { createRouter, createWebHistory } from 'vue-router'

const checkAuth = async (to, from) => {
    const store = useUserStore()

    if (!store.getToken && to.name !== 'Login') {
        return { name: 'Login' }
    }
}

const routes = [
    {
        path: '/',
        name: 'Default',
        component: () => import('@/layouts/DefaultLayout.vue'),
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('@/views/HomeView.vue'),
                beforeEnter: checkAuth,
            },
            {
                path: 'cars',
                name: 'Cars',
                component: () => import('@/components/CarList.vue'),
                beforeEnter: checkAuth,
            },
            {
                path: 'car/:id(\\d+)',
                name: 'Car',
                component: () => import('@/views/CarView.vue'),
                beforeEnter: checkAuth,
                children: [
                    {
                        path: 'manufacturer',
                        name: 'Manufacturer',
                        component: () =>
                            import('@/components/TheManufacturer.vue'),
                    },
                    {
                        path: 'dealer',
                        name: 'Dealer',
                        component: () => import('@/components/TheDealer.vue'),
                    },
                ],
            },
            {
                path: 'about',
                name: 'About',
                component: () => import('@/views/AboutView.vue'),
            },
        ],
    },
    {
        path: '/',
        name: 'Guest',
        component: () => import('@/layouts/GuestLayout.vue'),
        children: [
            {
                path: 'login',
                name: 'Login',
                component: () => import('@/views/LoginView.vue'),
            },
        ],
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/NotFoundView.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ left: 0, top: 0, behavior: 'smooth' })
            }, 100)
        })
    },
})

export default router
