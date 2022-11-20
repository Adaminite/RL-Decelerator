<template>
    <div id="register">
        <h1 class="page-header"> Register </h1>
        <div class="auth-container">
            <form style="width: 300px;" id="registerForm" @submit.prevent="handleSubmit($event)">
                <div class="form-group">
                    <label for="email"> Email Address: </label>
                    <input class="form-control" type="email" name="email" required />
                </div>
                <div class="form-group">
                    <label for="username"> Username: </label>
                    <input class="form-control" type="text" name="username" />
                </div>
                <div class="form-group">
                    <label for="password"> Password: </label>
                    <input class="form-control" id="pass" type="password" name="password" required />
                </div>
                <div class="form-group form-check">
                    <input class="form-check-input" type="checkbox" @click.stop="showPassword($event)" />
                    <label class="form-check-label" for="show"> Show Password </label>
                </div>
                <div class="form-group submit-container">
                    <input class="btn btn-primary" type="submit" value="Register" />
                </div>
            </form>
        </div>
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
            const email = data[0].value;
            const username = data[1].value;
            const password = data[2].value;

            try {
                await this.$store.dispatch('register', { email, username, password });
                router.push('/');
            }
            catch (err) {
                alert(err);
            }
        }
    }
}
</script>