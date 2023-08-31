import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Tambah from '../views/Tambah.vue';
import Evolusi from '../views/Evolusi.vue';

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/tambah",
        name: "Tambah",
        component: Tambah
    },
    {
        path: "/evolusi",
        name: "Evolusi",
        component: Evolusi
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
