import router from "../router";
import store from "../store";

export function logout() {
    store.dispatch('userLogout')
    router.push({name: 'login'})
}

export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {

        // Generate random number
        let j = Math.floor(Math.random() * (i + 1));

        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

export function formatMsgDate(dateStr) {
    const date = new Date(dateStr)
    return date.getMonth() + '-' + date.getDay()
}