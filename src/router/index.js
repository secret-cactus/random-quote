import * as VueRouter from 'vue-router';
import Home from '@/views/Home/template.vue'

const Router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {   path: '/',  name: 'Home',   component: Home}
    ]
})

export default Router