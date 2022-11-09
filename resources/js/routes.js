import { createWebHistory, createRouter } from 'vue-router';

import index from './components/indexVue.vue';
import login from './components/loginVue.vue';
import register from './components/registerVue.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: index
    },
    {
        path : '/login',
        name : 'login',
        component : login
    },
    {
        path : '/register',
        name : 'register',
        component : register
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;