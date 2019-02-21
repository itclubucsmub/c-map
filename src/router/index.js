import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '../components/Admin.vue'
import AppReq from '../components/AppReq.vue'
import sugtest from '../components/sugtest'
import Home from '../components/Home'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Home
}, {
    path: '/admin',
    component: Admin
}, {
    path: '/appreq',
    component: AppReq
}, {
    path: '/sugtest',
    component: sugtest
}
]

const router = new VueRouter({
    routes
})

export default router
