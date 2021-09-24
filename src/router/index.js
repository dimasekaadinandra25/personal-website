import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import("../views/Home.vue")
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import("../views/Profile.vue")
    },
    {
        path: '/skills',
        name: 'skills',
        component: () => import("../views/Skills.vue")
    },
    {
        path: '/project',
        name: 'project',
        component: () => import("../views/Project.vue")
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import("../views/Contact.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;