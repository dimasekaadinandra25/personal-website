import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/personal-website/',
        name: 'home',
        component: () => import("../views/Home.vue")
    },
    {
        path: '/personal-website/profile',
        name: 'profile',
        component: () => import("../views/Profile.vue")
    },
    {
        path: '/personal-website/skills',
        name: 'skills',
        component: () => import("../views/Skills.vue")
    },
    {
        path: '/personal-website/project',
        name: 'project',
        component: () => import("../views/Project.vue")
    },
    {
        path: '/personal-website/contact',
        name: 'contact',
        component: () => import("../views/Contact.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;