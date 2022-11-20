
<!-- https://stackoverflow.com/questions/48969495/in-javascript-how-do-i-should-i-use-async-await-with-xmlhttprequest -->
<template>
    <div id="login">
        <h1 class="page-header"> Login </h1>
        <div class="auth-container">
            <form id="loginForm" style="width: 300px;" @submit.prevent="handleSubmit($event)">
                <div class="form-group">
                    <label for="username"> Username: </label>
                    <input class="form-control" type="text" name="username" required/>
                </div>

                <div class="form-group">
                    <label for="password"> Password: </label>
                    <input class="form-control" id="pass" type="password" name="password" required/>
                </div>

                <div class="form-group submit-container">
                    <input type="submit" class="btn btn-primary" value="Log In"/>
                </div>

            </form>
        </div>
    </div>
</template>


<script>

import router from '../router/index.mjs';
    
export default{
    created() {
        if (this.$store.state.username) {
            alert('Error: already signed in');
            router.push('/');
        }  
    },
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