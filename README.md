
# mindful-app-front
Final bootcamp MERN project

This app helps users to take mindful, needs based breaks and write reflections.

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up in the platform so that I can start using the provided break exercises and write my own reflections. 
-  **Login:** As a user I can login to the platform and first see my dashboard
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **About** As an anon/user I can read about the app on the homepage
-  **Contact** As an anon/user I can read the contact information of the developer
-  **Resources** As an anon/user I can see a full list of the used resources with links
-  **Choose an exercise** As a user I can choose an exercise that corresponds to my need
-  **See an Exercise** As a user I can view an exercise and start taking a break
-  **List Exercises** As a user I can get an overview of all available exercises
-  **Filter Exercises** As a user I can filter exercises by categories
-  **Add to Favorites** As a user I can save my favourite exercises to have easier access
-  **Delete from Favorites** As a user I can unlike an exercise from my favourites
-  **See my Favorites** As a user I can see my favourite exercises and start from there.
-  **Write a Reflection** As a user I can write a new reflection
-  **Edit a Reflection** As a user I can edit my reflections
-  **Delete a Reflection** As a user I can delete my reflections
-  **See a Reflection** As a user I can see a reflection and its related exercise
-  **List Reflections** As a user I can get a list of all my reflections


## Backlog

User profile:
- guide and background information 
- create own exercises
- timer to set time for exercises
- timer to remind taking a break
- mood tracker
- toasts
- tracking of progress 

admin profile:
- admin dashboard to manage exercises

# Client

# Frontend

## React Router Routes (React App)
| Path                      | Component                      | Permissions                 | Behavior                                                      |
| ------------------------- | --------------------           | --------------------------- | ------------------------------------------------------------- |
| `/`                       | NavbarPublic, About, Footer    | public `<Route>`            | Home page overview and about                                  |
| `/resources`              | NavbarPublic/User, Sources,    | public `<Route>`            | Overview of resources used                                    |
|                           | Footer                         |                             |                                                               |
| `/contact`                | NavbarPublic/User, Contact,    | public `<Route>`            | Contact page with information about developer                 |
|                           | Footer                         |                             |                                                               |
| `/signup`                 | SignupPage                     | anon only `<AnonRoute>`     | Signup form, link to login, navigate to login after signup    |
| `/login`                  | LoginPage                      | anon only `<AnonRoute>`     | Login form, link to signup, navigate to dashboard after login |
| `/dahsboard`              | NavbarUser, Footer             | user only `<PrivateRoute>`  | Shows options and first exercise for user                     |
| `/exercises`              | NavbarUser, AllExercises,      |                             |                                                               |
|                           | ExerciseCard, CategoryCard,    |                             |                                                               |
|                           | Footer                         | user only `<PrivateRoute>`  | Shows all exercises, navigate to single exercise              |
| `/exercise/:id`           | NavbarUser, SingleExercise,    |                             |                                                               |
|                           | ExerciseCard, HandleFavourites,|                             |                                                               |
|                           | Footer                         | user only `<PrivateRoute>`  | Shows single exercise                                         |
| `/favourites`             | NavbarUser, FavExercises,      |                             |                                                               |
|                           | ExerciseCard, Footer           | user only `<PrivateRoute>`  | Shows favourites of user                                      |
| `/reflections`            | NavbarUser, AllReflections,    |                             |                                                               |
|                           | ReflectionCard, Footer         | user only `<PrivateRoute>`  | Shows all reflections of user                                 |
| `/reflection/:id`         | NavbarUser, SingleReflection,  |                             |                                                               |
|                           | Footer                         | user only `<PrivateRoute>`  | Shows single reflection of user                               |
| `/new-reflection`         | NavbarUser, CreateReflection,  |                             |                                                               |
|                           | Footer                         | user only `<PrivateRoute>`  | Shows a form to write a new reflection                        |
| `/update-reflection/:id`  | NavbarUser, UpdateReflection,  |                             |                                                               |
|                           | Footer                         | user only `<PrivateRoute>`  | Shows a form to edit a reflection                             |
| `/profile`                | NavbarUser, Footer             | user only `<PrivateRoute>`  | Shows users profile information                               |


## Components

- CategoryCard
- ExerciseCard
- ReflectionCard
- NavbarPublic
- NavbarUser
- Footer
- HandleFavourites
- IsAnon
- IsPrivate

## Context

- auth.context

# Server

## Models

### User model

```
name - String // required
email - String // required & unique // lowercase, trim
password - String // required
favExercises - [ObjectID<Exercise>]
timestamps - true
```

### Exercise model

```
title - String // required // unique
category - String // required // enum [ "balance", "energy", "expression", "connection", "nourishment", "rest"]
description - String // required
mediaUrl - String
mediaType - String // enum: ["audio", "video"]
imgUrl - String
tags - String // required //enum: [ "move", "breathe", "meditate", "stretch", "walk", "dance", "eat", "drink", "sleep", "connect", "watch", "listen", "reflect", "journal", "nature", "create", "play","calm down", "ground", "feel", "observe", "visualize"]
duration - String
timestamps - true
 
for future reference:
categoryImg - String
relReflections - [ObjectID<Reflection>]
```

### Reflection model

```
date - Date // required
title - String 
text - String // required
relatedExercise - [ObjectID<Exercise>]
user - [ObjectID<User>]
mood - String // enum
timestamps true
```

## API Endpoints/Backend Routes

### AUTH Routes
- GET /auth/verify
- POST /auth/signup
  - body:
    - username
    - email
    - password
- POST /auth/login
  - body:
    - username
    - password

### USER Routes
- GET /users/:id
- PUT /users/:id
- DELETE /users/:id

### EXERCISE Routes
- GET /exercises
- POST /exercises
- PUT  /exercises/:id
- GET /exercises/:id
- DELETE /exercises/:id

### REFLECTION Routes
- GET /reflections/user/:id
- POST /reflections
- PUT /reflections/:id
- GET /reflections/:id
- DELETE /reflections/:id

## Links

### Git

[Client repository Link](https://github.com/Baba-labab/mindful-app-front)
[Server repository Link](https://github.com/Baba-labab/mindful-app-back)

[Deploy Link](http://my-mindful-moment.netlify.app)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)