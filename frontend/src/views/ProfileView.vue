<template>

    <div v-if="hasData">
        <h1>Profile</h1>
        <p> Username: {{ profileInfo.username}}</p>
        <p> Email: {{profileInfo.email}}</p>
        <p> Creation Date: {{createDate}}</p>

        <h2>Want to Register as a Booster?</h2>
        <form @submit.prevent="handleSubmit($event)">
            <div>
                <label for="fname"> First Name: </label>
                <input type="text" name="fname" required />
            </div>

            <div>
                <label for="lname"> Last Name: </label>
                <input type="text" name="lname" required />
            </div>

            <div>
                <label for="rate"> Rate: </label>
                <input type="number" name="rate" min="5" max="30" required />
            </div>

            <div>
                <input type="submit" value="Submit" />
            </div>
        </form>
    </div>
 
</template>



<script>

import router from '../router/index.mjs';
import axios from 'axios';

export default {
    data() {
        return {
            profileInfo: null,
            hasData: false
        };
    },
    async created(){
        if (!this.$store.state.username) {
            alert('Error: you must be signed in');
            router.push('/');
        }

        const res = await axios.post('/api/users/get', { username: this.$store.state.username });
        this.profileInfo = res.data;
        console.log(this.profileInfo);
        this.hasData = true;
    },
    methods: {
        async handleSubmit(event) {
            const fname = event.target.elements.fname.value;
            const lname = event.target.elements.lname.value;
            const email = this.profileInfo.email;
            const rate = event.target.elements.rate.value;

            try {
                const res = await axios.post('/api/boosters/add', {
                    name: (fname + " " + lname).toLowerCase(),
                    creationDate: Date.now(),
                    email: email,
                    rate: rate
                });

                if (res.data.error) {
                    throw res.data.error;
                }
            }
            catch (err) {
                alert(err);
            }
        }
    },
    computed: {
        createDate() {
            return new Date(Date.parse(this.profileInfo.joinDate)).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" }); 
        }
    }
}
</script>