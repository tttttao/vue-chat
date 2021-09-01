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
        userLogin({commit}, flag) {
            commit('userStatus', flag)
        }
    }
}