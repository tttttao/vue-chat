import Vue from 'vue'
import VueRouter from 'vue-router'
import ChatList from "../views/ChatList";
import FriendList from "../views/FriendList";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'chatList',
        component: ChatList
    },
    {
        path: '/friend-list',
        name: 'friendList',
        component: FriendList
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
