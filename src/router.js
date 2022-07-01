import { createRouter, createWebHistory } from 'vue-router';
const routes = [
    {
        name: 'HomePage',
        path: '/',
        component: () => import('@/components/products/ListProduct')
    },
    {
        name: 'PurchasePage',
        path: '/urun-girisi',
        component: () => import('@/components/products/PurchaseProduct')
    },
    {
        name: 'SalePage',
        path: '/urun-satisi',
        component: () => import('@/components/products/SaleProduct')
    },
    { 
        path: "/:catchAll(.*)",
        redirect: "/"
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;