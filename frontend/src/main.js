import { createApp } from 'vue';
import {createStore} from 'vuex';
import App from './App.vue';
import router from './router';

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
        }
    },
    actions:{
        logout(state){
            state.commit('logout');
        },
        login(state, user){

        }
    }

});

const app = createApp(App);

app.use(store);
app.use(router);

app.mount('#app');
