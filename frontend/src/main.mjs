import { createApp } from 'vue';
import {createStore} from 'vuex';
import App from './App.vue';
import router from './router/index.mjs';
import axios from 'axios';

import './assets/main.css';

const store = createStore({
    state(){
        return {
            username: window.sessionStorage.getItem('username') || '',
            token: window.sessionStorage.getItem('token') || '',
        };
    },
    mutations:{
        logout(state){
            state.username = '';
            state.token = '';
            window.sessionStorage.removeItem('token');
            window.sessionStorage.removeItem('username');
        },
        login(state, payload) {
            state.username = payload.username;
            state.token = payload.token;
            window.sessionStorage.setItem('username', payload.username);
            window.sessionStorage.setItem('token', payload.token);
        }
    },
    actions:{
        logout(state){
            state.commit('logout');
        },
        async register(state, user) {

            const res = await axios.post('/api/users/register', user);

            if (res.data.error) {
                throw res.data.error;
            }
            
            state.commit('login', res.data);
        },
        async login(state, user) {
            const res = await axios.post('/api/users/login', user);
            
            if (res.data.error) {
                throw res.data.error;
            }
            
            state.commit('login', res.data);
        }
        
    }

});

const app = createApp(App);

app.use(store);
app.use(router);

app.mount('#app');
