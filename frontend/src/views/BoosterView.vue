<template>
    <div v-if="booster">
        {{ booster }}
    </div>

    <div v-else-if="notFound">
        Error: 404
    </div>

    <div v-else>

    </div>
</template>

<script>
import axios from 'axios';

    export default{
        data() {
            return {
                booster: null,
                notFound: false
            };
         },
        
        async created() {
            const slug = this.$route.params.id;
            try {
                const result = await axios.get('/api/boosters/find', { params: { slug: slug } });
                const booster = result.data[0];
                this.booster = booster;
                if(!booster){
                    this.notFound = true;
                }
            }
            catch (err) {
                console.log(err);
            }
        }
    }
</script>