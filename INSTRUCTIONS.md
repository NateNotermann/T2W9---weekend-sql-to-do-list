
## Weekend Challenge: SQL To-Do List

Hello Primers! 

Welcome to your weekend challenge!

Full stack is pretty awesome, huh? The idea that you are able to spin up a full application architecture in such a short time is pretty incredible. This weekend is all about showing us that you have a handle on each of the different parts of the full stack. 

## The To-Do App

You are going to create a 'TO DO' application. This type of application is very common to tackle when learning a new language, which makes it extremely valuable to work through for the first time. Chances are good that at some point in your career you will tackle this again while learning another language.

**Here are the specific components for the challenge:**

* Create a front end experience that allows a user to create a Task.
<!-- need 2 input fields and 1 button - html - DONE--> 
* When the Task is created, it should be stored inside of a database (SQL)
<!-- sends to db -- DONE--> 
* Whenever a Task is created the front end should refresh to show all tasks that need to be completed.
<!-- DONE -->
* Each Task should have an option to 'Complete' or 'Delete'.
<!-- complete button, delete button - client append -->
<!-- DONE -->
* When a Task is complete, its visual representation should change on the front end.
<!-- possible boolean false to true -->
<!-- data-id, id, class/css -->
 For example, the background of the task container could change from gray to green. 
 <!-- Whole row turns either red for uncompleted/false or green for completed/true -->
 
 The complete option should be  'checked off'. 
 Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete.
<!-- -->
* Whether or not a Task is complete should also be stored in the database.
<!-- Sends to data base ---  DONE -->
* Deleting a Task should remove it both from the front end as well as the Database.
<!-- deletes from data base ---  DONE -->

### Styling

Use CSS styling to move the aesthetic of the page beyond the vanilla HTML look:
  - background color of the page
  <!-- light light blue --- DONE -->
  - font family and size
  <!-- uncompleted task ar italic --- DONE -->
  - text color & or background color of tasks *to show whether or not they have been completed*
  <!-- both text and color change weather ot not they are completed --- DONE -->

### Approach

We would recommend you spend some time thinking about how to approach this problem. Think through all the logic that will be needed prior to writing any code. Take your time, relax, remember that impostor syndrome is real, and that you are capable of knocking this out of the park!

### Create a Database

Be sure to create a new database through Postico. Use the name `weekend-to-do-app`. You will need to use this name in your database connection configuration on your server.
<!-- database created -->

### Database Structure

Please include a `database.sql` text file in your repo that includes all of your `CREATE TABLE` queries. 
<!-- sql file in repo -->
This is so we can re-create your database while testing your app.

## Stretch Goals

For each of your stretch goals, you will be practicing git branching. Please refer to the branching notes for a reminder on commands. Each branch will be merged into main using `--no-ff`. This will allow us to see that you branched your feature when you turn in your code.

- `feature-styling-bootstrap` 

    - [ ]  Add Bootstrap to the front end and style it up!
      -  Buttons -- make the creation buttons and completion buttons green and the delete red.
      -  Inputs -- make your text inputs styled in the bootstrap way
      -  Responsive -- make your app responsive to different screen sizes -- check out the [Layout](https://getbootstrap.com/docs/4.1/layout/overview/) section

- `feature-confirm-delete`

    - [ ]  In whatever fashion you would like, create an 'are you sure: yes / no' option when deleting a task.
        - Some styled options are [Bootstrap Modal](https://getbootstrap.com/docs/4.0/components/modal/) or [Sweet Alerts](https://sweetalert.js.org/guides/): Use the CDN option.

- `feature-ordering-task-query` 

    - [ ]  Research [Query Params](https://expressjs.com/en/api.html#req.query) to have the request reverse the order of the returned todos. 
    
- `feature-time-completed` 

    - [ ]  Add the ability to record when a task was completed. Show the completed date on the frontend in a pretty format.

<!-- npm init DONE --> 
<!-- npm install express DONE -->
<!-- npm install DONE -->
<!-- npm install pg DONE -->

<!-- readMe.md DONE -->
<!-- .gitignore DONE -->
<!-- server folder DONE -->
<!-- public folder DONE -->
<!-- script folder DONE -->
<!-- style folder DONE -->
<!-- vendors DONE -->
<!-- index.html DONE -->
<!-- server.js DONE -->
<!-- client.js DONE -->
