
# mindful-app-front
Final bootcamp MERN project

This app helps users to take mindful, needs based breaks and write reflections. (A timer sets the time for the break.)

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up in the platform so that I can start using the provided break exercises and write my own reflections. 
-  **Login:** As a user I can login to the platform and first see my dashboard
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **About** As an anon/user I can read the about on the homepage
-  **Contact** As an anon/user I can read the contact information and sources
-  **Choose an exercise** As a user I can choose an exercise that corresponds to my need
-  **See an Exercise** As a user I can view an exercise and start taking a break
-  **Set a Timer** As a user I can set a timer for the duration of my break
-  **List Exercises** As a user I can get an overview of all available exercises
-  **Search Exercises** As a user I can search for exercises for categories and tags (and title?)
-  **Add to Favorites** As a user I can save my favourite exercises to have easier access
-  **Delete from Favorites** As a user I can unlike an exercise from my favourites
-  **See my Favorites** As a user I can see my favourite exercises and start from there.
-  **See related Reflections** As a user I can see a list of reflections that correspond to an exercise
-  **Write a Reflection** As a user I can write a new reflection
-  **Edit a Reflection** As a user I can edit my reflections
-  **Delete a Reflection** As a user I can delete my reflections
-  **See a Reflection** As a user I can see a reflection and its related exercise
-  **List Reflections** As a user I can get a list of all my reflections
-  **Guide** As a user I can read a guide and background information of the app

## Backlog

User profile:
- create own exercises
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
| `/`                       | About                          | public `<Route>`            | Home page                                                     |
| `/signup`                 | SignupPage                     | anon only `<AnonRoute>`     | Signup form, link to login, navigate to login after signup    |
| `/login`                  | LoginPage                      | anon only `<AnonRoute>`     | Login form, link to signup, navigate to dashboard after login |
| `/logout`                 | n/a                            | user only `<PrivateRoute>`  | Navigate to homepage after logout, expire session             |
| `/exercises`              | NavBar, ElementList, FooterBar | user only `<PrivateRoute>`  | Shows all exercises, navigate to single exercise              |
| `/exercise/:id`           | NavBar, ElementList, FooterBar | user only `<PrivateRoute>`  | Shows single exercise                                         |
| `/favourites`             | NavBar, ElementList, FooterBar | user only `<PrivateRoute>`  | Shows favourites of user                                      |
| `/reflections`            | SearchForm, SearchResults      | user only `<PrivateRoute>`  | Shows all reflections of user                                 |
| `/reflection/:id`         | SearchForm, SearchResults      | user only `<PrivateRoute>`  | Shows single reflection of user                               |
| `/new-reflection`         | SearchForm, SearchResults      | user only `<PrivateRoute>`  | Shows a form to write a new reflection                        |
| `/update-reflection/:id`  | ElementInfo                    | user only `<PrivateRoute>`  | Shows a form to edit a reflection                             |
| `/profile`                | Profile, Stats                 | user only `<PrivateRoute>`  | Shows users profile information                               |
