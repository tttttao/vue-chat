import router from "../router";
import store from "../store";

export function logout() {
    store.dispatch('userLogin', false)
    router.push({name: 'login'})
}