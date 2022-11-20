<template>
    <div id="booster" v-if="hasData">
        <h1 class="page-header">{{fullName(booster.name)}}</h1>
        <h2>Information</h2>
        <p>Email: {{booster.email}}</p>
        <p>Rate: <em>${{booster.rate}}/session</em></p>
        <div>
            <h2>Add Review</h2>
            <div v-if="isSignedIn">
                <form @submit.prevent="handleSubmit($event)">
                    <fieldset>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" value="1" name="rating"/>
                            <label class="form-check-label">1</label> 
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" value="2" name="rating" />
                            <label class="form-check-label">2</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" value="3" name="rating" />
                            <label class="form-check-label">3</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" value="4" name="rating" />
                            <label class="form-check-label">4</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" value="5" name="rating" />
                            <label class="form-check-label">5</label>
                        </div>
                    </fieldset>

                    <div class="form-group">
                        <textarea class="form-control" style="resize: none;" v-model="reviewContent" maxlength="500" @change="handleChange($event)"></textarea>
                    </div>

                    <p>{{500 - reviewContent.length}} characters remaining</p>

                    <div class="form-group">
                        <input class="btn btn-primary" type="submit" value="Add Review"/>
                    </div>
                </form>
            </div>

            <div v-else>
                <h3> You must be signed in in order to write a review </h3>
            </div>
        </div>

        <h2 style="text-align:center;">Reviews</h2> 
        <div>
            <div class="row">
                <div class="col-sm-3" v-for="review in booster.reviews">
                    <div v-if="review" class="card">
                        <div class="card-body">
                            <p class="card-text"><strong>User: {{review.username}}</strong></p>
                            <p class="card-text"><em>Rating: {{review.rating}}/5</em></p>
                            <p class="card-text">{{review.content}}</p>
                        </div>
                    </div>
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
            try {
                await axios.post('/api/reviews/add', { slug: this.$route.params.id, rating, content: this.reviewContent, username: this.$store.state.username });
                this.$router.go();
            }
            catch (err) {
                alert(err);
            }
        },
        handleChange(event) {
            this.reviewContent = event.target.value;
        }
    }
}

</script>