<template>
    <div v-for="booster in boosters">
        <div>
            <h2>{{ fullName(booster.name) }}</h2>
            <p> {{ booster.email }}</p>
            <p> {{ booster.rate }}</p>
            <a v-bind:href="'/boosters/' + booster.id"> Reviews </a>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    data() {
        return {
            boosters: []
        };
    },

    async created() {
        try {
            const res = await axios.get('/api/boosters/findAll');

            if (res.data.error) {
                throw res.data.error;
            }
            const data = res.data.boosters;

            this.boosters = data;
        }
        catch (err) {
            alert(err);
        }
    },
    computed: {
        fullName() {
            const capitalizeName = (name) => {
                const parts = name.split(" ");
                const [fName, lName] = parts;

                return fName.charAt(0).toUpperCase() + fName.substring(1) + " " + lName.charAt(0).toUpperCase() + lName.substring(1);
            }

            return capitalizeName;
        }
    }
}
</script>