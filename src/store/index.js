import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        token: localStorage.getItem('token') || '',
        isLoggedIn: !!localStorage.getItem('token')
    },
    mutations: {
        login(state, token) {
            state.token = token;
            state.isLoggedIn = true;
        },
        logout(state) {
            state.token = '';
            state.isLoggedIn = false;
        }
    },
    actions: {
        login({ commit }, token) {
            localStorage.setItem('token', token);
            commit('login', token);
        },
        logout({ commit }) {
            localStorage.removeItem('token');
            commit('logout');
        }
    }
});