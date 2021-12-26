# Design-Blog
Design Blog is a project created for the project defense of the React Softuni Course (November - December 2021) (https://softuni.bg/trainings/3575/reactjs-november-2021) as part of the Front-End (September - December 2021)

Project requirements document: [ReactJS-Project-Assignment.docx](https://github.com/TheStormWeaver/Design-Blog/files/7687984/ReactJS-Project-Assignment.docx)


## About the project
Design Blog  is an app that serves as an site that focuses on sharing inspiration trough a community of designers. Users can publish their own art designs. Once published, the design is displayed in the "Inspiration" tab along with all other designs created beforehand. The given user that created the design can edit it at any given time, whilst updating in the database or even delete it, removing it permanently from the database. Each other user that didn't create the given design can like it once, whilst a "likes" counter displays the current amount of likes on a specific design .Each user has a profile page in which they can edit thier profile icon, display name and short bio.

**Note: the project requires the sofuni-practice-server (located in the "server" folder in this repo) to be running at all times for everything to be working correctly.**

## User Access and restrictions
Unauthorized (not logged in) users have access to:
- Home page
- About us page
- Register page
- Login page
- Inspiration page

Authorized (Logged in) users have access to:
- The logout page
- Create design page, in which they can create designs
- Have the ability to edit designs that they have created
- Have the ability to delete designs that they have created
- Can like other people's designs
- Can access their own profile page, in which they can edit their profile picture, display name and about me info


# Running the project
1. Clone this repo or save it as a zip
2. Enter the directory of the project in a ide of choice & run "npm install"
3. Enter the "server" folder, then run CMD in the "server" folder and type in the command "node server.js"
4. Run the command "npm start" and use the app
