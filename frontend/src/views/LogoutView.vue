<template>

</template>

<script>

import router from '../router/index.mjs';

export default {
    created() {
        this.$store.commit('logout');
        router.push('/');
    }     
}

</script>