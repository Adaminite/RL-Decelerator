# Rocket League Decelerator

## Overview

Ever wanted to derank your Rocket League account? Either to smurf, play with friends, or just to lose? Rocket League Decelerator can handle that for you!

Rocket League Decelerator is a web app that will allow users to "hire" our certified (de)boosters to derank your account. Users can register and login. Once they're logged in, they can hire a deranker and/or write reviews for a specific deranker.

## Data Model

The application will store User, Reviews, and Derankers (the rest TBD)

- users can write as many reviews as they want
- each review consists of a rating, a description, and a deranker
- derankers will store their basic information and reviews as subdocs

An Example User:

```javascript
{
  username: "hehe xd",
  password: // some sort of password encryption,
  email: "hehexd123@realemail.com",
  createdOn: // some date
}
```

An Example Deranker with Review Id Reference:

```javascript
{
  name: "John Doe",
  email: "yo@yo.com",
  rate: 5,
  reviews: [
    "someReviewId_1", "someReviewId_2", // ...
  ],
  createdAt: // timestamp
}

// this is what a review would look like
{
  rating: 5,
  username: "what123",
  content: "Did a phenomenal job!",
  id: // some mongoose id,
  date: // some date
}
```

## [Link to Commented First Draft Schema](./backend/models/User.model.mjs)

## Wireframes

(**TODO**: wireframes for all of the pages on your site; they can be as simple as photos of drawings or you can use a tool like Balsamiq, Omnigraffle, etc.)

/login & /register - page for authentication stuff

![list create](documentation/login_signup.jpg)

/boosters - page for showing all derankers

![list](documentation/derank.jpg)

/boosters/:id - page for specific deranker

![list](documentation/specifc_derank.jpg)

## [Site map](documentation/site_map.jpg)

## User Stories or Use Cases

1. as non-registered user, I can register a new account with the site
2. as a non-registered user, I can view all of the available derankers (and view reviews)
3. as a user, I can log in to the site
4. as a user, I can write a review
5. as a user, I can register as a deranker

## Research Topics

- (3 points) Configuration Management (dotenv) [Use 1](./app.mjs) [Use 2](./backend/routers/users.mjs)
  - I'm doing to store the port, my MongoDB URI, and my token signing key in my dotenv file
    for my database
- (1 point) Client Side Library (Axios) [Sample component that makes AJAX request with Axios](./frontend/views/BoosterView.vue)
  - Used Axios instead of fetch to make API requests to my server, which was very easy to implement
- (6 point. Should be 8/9 in my opinion: reason stated below) Front-end framework (Vue.js); [Link to root Vue component](./frontend/src/App.vue)
  - Used Vue.js as a front-end framework, which was entirely new for me. This was very difficult as I had to learn how to learn the lifecycle hooks, the attribute bindings, event handlers, syntax, and how to ensure updating state to data fetched asynchronously seamlessly entered the page. I additionally worked with the Vue-Router and Vuex libraries for client side routing and persistent data storage, which made it even harder. In all, to be honest, this should be worth 8 or 9 points instead of 6 points due to the large scope.
- (2 points) CSS Framework (Bootstrap) [Sample component that uses Bootstrap](./frontend/views/BoosterView.vue)
  - Used bootstrap to handle the forms and the cards because styling those were too tedious. I minimally styled the remainder of the site manually.

12 points total out of 10 required points (**\_TODO**: addtional points will **not** count for extra credit)

## [Link to Initial Main Project File](app.mjs)

## Annotations / References Used

1. Favicon: https://www.icons101.com/icon/id_83992/setid_3058/Hex_Icons_by_canowyrms/rocketleague

2. Home Page Background: https://wall.alphacoders.com/big.php?i=885543

3. Vuex: https://vuex.vuejs.org/#what-is-a-state-management-pattern

4. Vue-Router: https://router.vuejs.org/guide/

5. Vue.js: https://vuejs.org/guide/introduction.html

6. Mongoose: https://mongoosejs.com/docs/

7. Express: https://expressjs.com/en/guide/routing.html

8. Bootstrap: https://getbootstrap.com/docs/4.6/getting-started/introduction/

9. StackOverflow (for every time I got stuck): https://stackoverflow.com/questions/40899532/how-to-pass-a-value-from-vue-data-to-href, https://stackoverflow.com/questions/32106155/can-you-force-vue-js-to-reload-re-render, https://stackoverflow.com/questions/40522634/can-i-pass-parameters-in-computed-properties-in-vue-js, https://stackoverflow.com/questions/35664550/vue-js-redirection-to-another-page, https://stackoverflow.com/questions/43210288/passing-props-to-element-attributes-in-vue-components, https://stackoverflow.com/questions/51554083/vue-js-which-component-lifecycle-should-be-used-for-fetching-data,

10. W3Schools (for how to toggle password visibility): https://www.w3schools.com/howto/howto_js_toggle_password.asp
