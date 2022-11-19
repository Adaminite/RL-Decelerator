<template>
    <div v-if="hasData">
        <h1>{{fullName(booster.name)}}</h1>
        <h2>Information</h2>
        <p>Email: {{booster.email}}</p>
        <p>Rate: {{booster.rate}}</p>
        <div>
            <h2>Add Review</h2>
            <div v-if="isSignedIn">
                <form>

                    <fieldset>

                    </fieldset>

                    <div>
                        <textarea style="resize: none;" v-bind:value="reviewContent" maxlength="500"></textarea>
                        <span>{{length}} characters remaining</span>
                    </div>

                    <div>
                        <input @click.prevent="handleSubmit($event)">Add Review</input>
                    </div>
                </form>
            </div>

            <div v-else>
                <h3> You must be signed in in order to write a review </h3>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import router from '../router/index.mjs';

export default{
    data() {
        return {
            booster: null,
            hasData: false,
            reviewContent: "",
        };
    },
    async created() {
        const slug = this.$route.params.id;
        try {
            const result = await axios.get('/api/boosters/find', { params: { slug: slug } });
            const booster = result.data;
            console.log(booster);
            this.booster = booster;
            if(!booster){
                router.push('/boosters');
            }

            this.hasData = true;
        }
        catch (err) {
            console.log(err);
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
        },
        isSignedIn() {
            return this.$store.state.username;
        },
        length() {
            return 500 - this.reviewContent.length;
        }
    },
    methods: {
        handleSubmit(event) {
            
        }
    }
}

</script>