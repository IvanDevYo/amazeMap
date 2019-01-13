import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Map from './views/Map.vue'

Vue.use(VueRouter);

const routes = [
    { 
        path: '/', 
        component: Home 
    },
    { 
        path: '/app', 
        name: 'map',
        component: Map
    },
]

export const router = new VueRouter({
    mode: 'history',
    routes
})