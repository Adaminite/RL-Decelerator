import { createApp } from 'vue';
import {createStore} from 'vuex';
import App from './App.vue';
import router from './router/index.mjs';
import axios from 'axios';

import './assets/main.css';

const store = createStore({
    state(){
        return {
            username: window.localStorage.getItem('username') || '',
            token: window.localStorage.getItem('token') || '',
        };
    },
    mutations:{
        logout(state){
            state.username = '';
            state.token = '';
            window.localStorage.removeItem('token');
            window.localStorage.removeItem('username');
        },
        login(state, payload) {
            state.username = payload.username;
            state.token = payload.token;
            window.localStorage.setItem('username', payload.username);
            window.localStorage.setItem('token', payload.token);
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
