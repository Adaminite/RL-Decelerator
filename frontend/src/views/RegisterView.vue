<template>
    <div>
        <h1> Register </h1>
        <form id="registerForm" @submit.prevent="handleSubmit($event)">
            <div>
                <label for="email"> Email Address: </label>
                <input type="email" name="email" required/>
            </div>

            <div>
                <label for="username"> Username: </label>
                <input type="text" name="username"/>
            </div>

            <div>
                <label for="password"> Password: </label>
                <input id="pass" type="password" name="password"/>
                <input type="checkbox" @click.stop="showPassword($event)">Show Password
            </div>

            <div>
                <label>

                </label>
            </div>

            <div>
                <input type="submit" value = "Register"/>
            </div>

        </form>
    </div>
</template>

<script>

import router from '../router/index.mjs';

    export default{
        data(){
            
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
                    const email = data[0].value;
                    const username = data[1].value;
                    const password = data[2].value;

                    console.log({ email, username, password });

                    try {
                        await this.$store.dispatch('login', { email, username, password });
                        router.push('/');
                    }
                    catch (err) {
                        console.log('somehow getting error');
                        alert(err);
                    }
                    
                    
                }
            }
    }
</script>