import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '../components/User.vue'
import Admin from '../components/Admin.vue'
import AppReq from '../components/AppReq.vue'
import sugtest from '../components/sugtest'
import Home from '../components/Home'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: User
}, {
    path: '/admin',
    component: Admin
}, {
    path: '/appreq',
    component: AppReq
}, {
    path: '/sugtest',
    component: sugtest
}, {
    path: '/home',
    component: Home
}
]

const router = new VueRouter({
    routes
})

export default router
