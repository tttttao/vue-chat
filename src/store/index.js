import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import chatList from './modules/chatList'
import friendList from './modules/friendList'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        chatList,
        friendList,
    },
})
