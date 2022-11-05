<template>
  <div>
    <form @submit.prevent="handleSubmit($event)">
      <div>
        <label for="email"> Email Address: </label>
        <input type="email" name="email" required />
      </div>
    
      <div>
        <label for="fname"> First Name: </label>
        <input type="text" name="fname" required/>
      </div>
    
      <div>
        <label for="lname"> Last Name: </label>
        <input type="text" name="lname" required />
      </div>
    
      <div>
        <label for="rate"> Rate: </label>
        <input type="number" name="rate" required/>
      </div>
    
      <div>
        <input type="submit" value="Submit"/>
      </div>
    </form>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  methods: {
    async handleSubmit(event) {
      const fname = event.target.elements.fname.value;
      const lname = event.target.elements.lname.value;
      const email = event.target.elements.email.value;
      const rate = event.target.elements.rate.value;

      try {
        const res = await axios.post('/api/boosters/add', {
          name: (fname + " " + lname).toLowerCase(),
          creationDate: Date.now(),
          email: email,
          rate: rate
        });

        alert('Go to /boosters/' + res.data.slug + ' to view the saved data in the database');
        if (res.error) {
          throw res.error;
        }
      }
      catch (err) {
        alert(err);
      }
    }
  }
}
</script>