<template>
    <div>

    </div>
</template>

<script>
import axios from 'axios';

    export default{
        data(){
            
        },
        mounted(){

    },
        async created() {
            const slug = this.$route.params.id;

            try {
                const result = await axios.get('/api/boosters/find', { params: { slug: slug } });
                console.log(result);
            }
            catch (err) {
                console.log(err);
            }
            
        }
    }
</script>