import router from "../router";
import store from "../store";

export function logout() {
    store.dispatch('userLogout')
    router.push({name: 'login'})
}

export function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {

        // Generate random number
        var j = Math.floor(Math.random() * (i + 1));

        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}