import Vue from 'vue'
import VueRouter from 'vue-router'
import messageList from "../pages/messageList.vue";
import Auth from "../pages/Auth.vue";
import Profile from "../pages/Profile.vue";

Vue.use(VueRouter)

const routes = [
    {path: '/', component: messageList},
    {path: '/auth', component: Auth},
    {path: '/profile', component: Profile},
    {path: '*', component: messageList},
]

export default new VueRouter({
    mode: 'history',
    routes
})