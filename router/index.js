import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Home from '../views/About'
import Home from '../views/TodoApp'

Vue.use(VueRouter)

const routes = [
    //config
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: 'todos',
        component: TodoApp
    }
]

export default new VueRouter({
    routes
})