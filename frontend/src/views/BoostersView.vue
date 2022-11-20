<template>
    <h1 class="page-header">Boosters</h1>
    <div class="row" v-for="booster in boosters">
        <div class="col-sm">
            <div class="card">
                <div class="card-body">
                    <p class="card-title"> <strong>{{ fullName(booster.name) }}</strong></p>
                    <p class="card-text"> {{ booster.email }}</p>
                    <p class="card-text"><em>${{ booster.rate }}/session</em></p>
                    <a class="card-link" v-bind:href="'/boosters/' + booster.id"> Reviews </a>
                </div>
            </div>
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
            };

            return capitalizeName;
        }
    }
}
</script>