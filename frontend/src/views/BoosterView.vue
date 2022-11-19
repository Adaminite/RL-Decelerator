<template>
    <div v-if="hasData">
        <h1>{{fullName(booster.name)}}</h1>
        <h2>Information</h2>
        <p>Email: {{booster.email}}</p>
        <p>Rate: {{booster.rate}}</p>
        <div>
            <h2>Add Review</h2>
            <div v-if="isSignedIn">
                <form @submit.prevent="handleSubmit($event)">
                    <fieldset>
                        <div>
                            <input type="radio" value="1" name="rating"/>
                            <label>1</label> 
                        </div>
                        <div>
                            <input type="radio" value="2" name="rating" />
                            <label>2</label>
                        </div>
                        <div>
                            <input type="radio" value="3" name="rating" />
                            <label>3</label>
                        </div>
                        <div>
                            <input type="radio" value="4" name="rating" />
                            <label>4</label>
                        </div>
                        <div>
                            <input type="radio" value="5" name="rating" />
                            <label>5</label>
                        </div>
                    </fieldset>

                    <div>
                        <textarea style="resize: none;" v-bind:value="reviewContent" maxlength="500" @change="handleChange($event)"></textarea>
                        <span>{{remaining}} characters remaining</span>
                    </div>

                    <div>
                        <input type="submit" value="Add Review"/>
                    </div>
                </form>
            </div>

            <div v-else>
                <h3> You must be signed in in order to write a review </h3>
            </div>

            <h2>Reviews</h2> 
            <div v-for="review in booster.reviews">
                <div v-if="review">
                    <p> User: {{review.username}} </p>
                    <p> Rating: {{review.rating}}/5</p>
                    <p> {{review.content}}</p>
                </div>
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
            remaining: 500
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
    },
    methods: {
        async handleSubmit(event) {
            const elements = event.target.elements;
            const rating = Number(elements.rating.value);
            console.log(rating);
            try {
                await axios.post('/api/reviews/add', { slug: this.$route.params.id, rating, content: this.reviewContent, username: this.$store.state.username });
                this.$router.go();
            }
            catch (err) {
                alert(err);
            }
        },
        handleChange(event) {
            console.log(event.target.value);
            this.reviewContent = event.target.value;
            this.remaining = 500 - this.reviewContent.length;
        }
    }
}

</script>