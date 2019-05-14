# Pong Game

## The classical pong game written in Javascript

# Technologies used
1. HTML5 & SVG
2. Javascript
3. Node
4. Npm
5. Parcel
5. Webpack 
6. Git & Github

# Installation instructions

Ensure you have [Node.js](https://nodejs.org/en/) installed first.

**Install dependencies:**

`$ npm install`

**Run locally with the Parcel dev server:**

`$ npm start`

Once you run the start command you can access your project at http://localhost:3000.

Read more about the [Parcel web application bundler here](https://parceljs.org/).

## Deploy

The deployment workflow for this project will be a bit different from what you've used when deploying simple static websites.

To deploy your finished Pong project as a GitHub page, you must first **update the `predeploy` script in the `package.json` file with the name of your repo.**

For example, if your repo URL is:

https://github.com/bob/pong-project

Update the `predeploy` script as follows:

```json
"predeploy": "rm -rf dist && parcel build index.html --public-url /pong-project",
```

Once you have done this, you can run:

`$ npm run deploy`

Now check out your deployed site.


# Personal learnings
This project was heavily based on Javascript, so it definitely stretched my Javascript skills. It was focused on OOP (Object oriented programming) where we used different types of data structures.
It was both a challenging and a fun project that I really enjoyed working on.

I really enjoyed implementing the stretch goals for this project. Some of the stretch goals were easier than others but overall every stretch goal was a solid exercise.



