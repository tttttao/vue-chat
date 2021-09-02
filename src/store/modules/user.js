import {IS_LOGIN_NO, IS_LOGIN_YES, LOGIN_STATUS} from "../../tools/consts";

export default {
    state: () => ({
        isLogin: false,
    }),
    getters: {
        isLogin: state => state.isLogin,
    },
    mutations: {
        userStatus(state, flag) {
            state.isLogin = flag
        },
    },
    actions: {
        userLogin({commit}) {
            localStorage.setItem(LOGIN_STATUS, IS_LOGIN_YES)
            commit('userStatus', true)
        },
        userLogout({commit}) {
            localStorage.setItem(LOGIN_STATUS, IS_LOGIN_NO)
            commit('userStatus', false)
        }
    }
}