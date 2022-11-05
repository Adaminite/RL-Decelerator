<template>
    <div>
        <h1> Register </h1>
        <form @submit="">
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
                <input type="text" name="password"/>
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
    export default{
        data(){
            
        },
        methods: {
            showPassword(event){

            }
        }
    }
</script>