import Vue from 'vue'
import VueRouter from 'vue-router'
import ChatList from "../views/ChatList";
import FriendList from "../views/FriendList";
import Login from "../views/Login";
import {IS_LOGIN_YES, LOGIN_STATUS} from "../tools/consts";

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
        let isLogin = router.app.$store.state.user.isLogin === true
        if (localStorage.getItem(LOGIN_STATUS) === IS_LOGIN_YES || isLogin || !to.meta.isLogin) {
            next()
        } else {
            next({name: 'login'})
        }
    }
)

export default router
