# Rocket League Decelerator

## Overview


Ever wanted to derank your Rocket League account? Either to smurf, play with friends, or just to lose? Rocket League Decelerator can handle that for you!

Rocket League Decelerator is a web app that will allow users to "hire" our certified (de)boosters to derank your account. Users can register and login. Once they're logged in, they can hire a deranker and/or write reviews for a specific deranker. 

## Data Model

The application will store User, Reviews, and Derankers (the rest TBD)

* users can write as many reviews as they want
* each review consists of a rating, a description, and a deranker
* derankers will store their basic information and reviews as subdocs 

An Example User:

```javascript
{
  username: "hehe xd",
  password: // some sort of password encryption,
  email: "hehexd123@realemail.com"
}
```

An Example Deranker with Review Subdoc (exact structure TBD):

```javascript
{
  name: "John Doe",
  reviews: [
    { rating: 5, userId: "_212417", content: "Did a phenomenal job!"}, // userId refers to whow rote review
    { rating: 3, userId: "_214142", content: "Was a few days late in fulfilling the order"},
  ],
  createdAt: // timestamp
}
```


## [Link to Commented First Draft Schema](./backend/models/User.model.mjs) 

(__TODO__: create a first draft of your Schemas in db.mjs and link to it)

## Wireframes

(__TODO__: wireframes for all of the pages on your site; they can be as simple as photos of drawings or you can use a tool like Balsamiq, Omnigraffle, etc.)

/list/create - page for creating a new shopping list

![list create](documentation/list-create.png)

/list - page for showing all shopping lists

![list](documentation/list.png)

/list/slug - page for showing specific shopping list

![list](documentation/list-slug.png)

## Site map

(__TODO__: draw out a site map that shows how pages are related to each other)

Here's a [complex example from wikipedia](https://upload.wikimedia.org/wikipedia/commons/2/20/Sitemap_google.jpg), but you can create one without the screenshots, drop shadows, etc. ... just names of pages and where they flow to.

## User Stories or Use Cases

(__TODO__: write out how your application will be used through [user stories](http://en.wikipedia.org/wiki/User_story#Format) and / or [use cases](https://en.wikipedia.org/wiki/Use_case))

1. as non-registered user, I can register a new account with the site
2. as a user, I can log in to the site
3. as a user, I can create a new grocery list
4. as a user, I can view all of the grocery lists I've created in a single list
5. as a user, I can add items to an existing grocery list
6. as a user, I can cross off items in an existing grocery list

## Research Topics

(__TODO__: the research topics that you're planning on working on along with their point values... and the total points of research topics listed)

* (5 points) Integrate user authentication
    * I'm going to be using passport for user authentication
    * And account has been made for testing; I'll email you the password
    * see <code>cs.nyu.edu/~jversoza/ait-final/register</code> for register page
    * see <code>cs.nyu.edu/~jversoza/ait-final/login</code> for login page
* (4 points) Perform client side form validation using a JavaScript library
    * see <code>cs.nyu.edu/~jversoza/ait-final/my-form</code>
    * if you put in a number that's greater than 5, an error message will appear in the dom
* (5 points) vue.js
    * used vue.js as the frontend framework; it's a challenging library to learn, so I've assigned it 5 points

10 points total out of 8 required points (___TODO__: addtional points will __not__ count for extra credit)


## [Link to Initial Main Project File](app.mjs) 

(__TODO__: create a skeleton Express application with a package.json, app.mjs, views folder, etc. ... and link to your initial app.mjs)

## Annotations / References Used

(__TODO__: list any tutorials/references/etc. that you've based your code off of)

1. [passport.js authentication docs](http://passportjs.org/docs) - (add link to source code that was based on this)
2. [tutorial on vue.js](https://vuejs.org/v2/guide/) - (add link to source code that was based on this)

