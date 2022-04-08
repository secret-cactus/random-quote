import * as VueRouter from 'vue-router';

const Router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
    ]
})

export default Router