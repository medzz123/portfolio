---
title: Donkey
description: Donkey is a personal project that I have been working on to expand my knowledge of SSR, Graphql and deploying projects live. At completion Donkey will be an admin app that will allow management of the daily necessities of a garage.
date: 2019-02-01
links: https://github.com/mahedihs1997/donkey, https://github.com/mahedihs1997/keynod
keywords: Typescript, Next Js, Apollo, Heroku, Postgre
featured: true
image: /sea.jpg
---

## Current Progress

Basic frontend app completed with login system authenticated by backend. Scaffolded most pages and components.

Basic backend completed and deployed with Heroku. Authentication system is integrated. Currently implementing queries and mutation for each entity, and its basic functions.

## Backend - Keynod

**Tech Stack** : Typescript, Node, Heroku, Apollo Server, Dataloader, Graphql Tools, Json Webtoken, Bycript, Sequelize

I built the backend using `Apollo server express`, so I could apply custom middleware. 

Authentication is done by using `Bycript` to hash the passwords and `JSON Webtoken` to create tokens with them. 

Each mutation or query is protected by using directives.

Types are generated using `Graphql Codegen`.

Testing for now is done api spinning up a test server and hitting it directly using `Axios`. Planning to test with `Apollo integration testing` using test clients in the near future.

`Sequelize` is used to modify data from a `Postgre` database.

Backend is deployed from master branch to Heroku, with an addon which contains the `Postgre` database.

## Frontend - Donkey

**Tech Stack** : Typescript, Next Js, Vercel, Apollo Client, Styled Components, Material UI, React Virtualized, Formik

Built the webapp using `Next Js` and `Material UI` as that is allows for fast prototyping.

Authentication is controlled using cookies. Every page calls `getInitialProps` which checks if the connection to the backend server is authenticated, if not send to login.

Tables are built using React Virtualized.

Plans for the future is to redo the styling and integrate with backend.

### Will update with more information as projects progresses and images when frontend is ready ...