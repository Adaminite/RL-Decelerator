
<!-- https://stackoverflow.com/questions/48969495/in-javascript-how-do-i-should-i-use-async-await-with-xmlhttprequest -->
<template>
    <div>
        <h1> Login </h1> 
        <form id="loginForm" @submit.prevent="handleSubmit($event)">
            <div>
                <label for="username"> Username: </label>
                <input type="text" name="username" required/>
            </div>

            <div>
                <label for="password"> Password: </label>
                <input id="pass" type="password" name="password" required/>
            </div>

            <div>
                <input type="submit" value="Log In"/>
            </div>

        </form>
    </div>
</template>


<script>

import router from '../router/index.mjs';
    
export default{
    methods: {
        showPassword(event) {
            const pass = document.getElementById('pass');
            if (pass.getAttribute('type') === 'password') {
                pass.setAttribute('type', 'text');
            }
            else {
                pass.setAttribute('type', 'password');
            }
        },
        async handleSubmit(event) {
            const data = event.target.elements;
            const username = data[0].value;
            const password = data[1].value;

            try{
                await this.$store.dispatch('login', { username, password });
                router.push('/');
            }
            catch (err) {
                alert(err);
            }
        }

    }
}
</script>