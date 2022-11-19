<template>
    <div class="navbar">
        <ul class="navUl leftItems">
            <router-link class="navLink" to="/" tag="li">Home</router-link>
            <router-link class="navLink" to="/boosters" tag="li">Boosters</router-link>
        </ul>

        <ul v-if="isSignedIn" class="navUl rightItems">
            <router-link class="navLink" to="/profile" tag="li">Profile</router-link>
            <router-link class="navLink" to="/logout" tag="li">Log Out</router-link>
        </ul>
        <ul v-else class="navUl rightItems">
            <router-link class="navLink" to="/login" tag="li">Sign In</router-link>
            <router-link class="navLink" to="/register" tag="li">Register</router-link>
        </ul>
    </div>
</template>

<script>

export default {
    computed: {
        isSignedIn() {
            return this.$store.state.username;
        }    
    },
}

</script>