import Vue from 'vue'
import VueRouter from 'vue-router'
import ChatList from "../views/ChatList";
import FriendList from "../views/FriendList";
import Login from "../views/Login";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'chatList',
        component: ChatList,
        meta: {
            isLogin: true
        }
    },
    {
        path: '/friend-list',
        name: 'friendList',
        component: FriendList,
        meta: {
            isLogin: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            isLogin: false
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


router.beforeEach((to, from, next) => {
    let isLogin = router.app.$store.state.isLogin === true
    if (to.meta.isLogin && isLogin === false) {
        next({name: 'login'})
    } else {
        next()
    }
})

export default router
