# Desert Island

## The Story of Desert Island

In today's world of unlimited data plans, gigs upon gigs of storage space, and social media feeds that push new photos off the page faster than you can upload them, we wondered...

...what if an online photo album only let you upload five images?

Not because of storage limits, or arbitrary usage fees, but simply as an exercise in self-definition and discipline. How would you sum yourself up in five pictures?

The idea for our app rose up out of this question. If you were stranded on a desert island with nothing but your wits and a 4G smartphone, what five image files would you want to have stored in the cloud? If these photos were the only way you could communicate with your fellow castaways on distant shores, what would you want them to see?

Introducing...**Desert Island.**


[Link to Backend Repo](https://github.com/SynergisticDeepities/desert-island-api)
||
[Link to Backend Heroku](https://desert-island-api.herokuapp.com/)

### Developing Desert Island

#### User Stories:
<br />
As a user, I want to be able to:
  * Sign up / sign in / change password / sign out
  * Upload a file
  * Delete the file I uploaded
  * Select a specific other person's island to view
  * Download other people's files

[Link to Wireframes](https://drive.google.com/file/d/0B1tPaUXMBTnjRjhzMFpUZnVtczg/view)
||
[Link to ERD](https://drive.google.com/open?id=0B9qM-5IxeHjzR1F5MW1wUzNnS0E)


*Desert Island* was developed with a simple goal in mind: to deploy a client and API capable
of uploading files to AWS and displaying them for users to interact with.

Our four person group worked together on both the client and API using a centralized git
workflow with feature branches to avoid merge conflicts. Each group member was assigned specific roles in order to streamline development.

As a group we simultaneously built out the front and back end while keeping an open dialogue about what specific features we were working on. This was beneficial because
when it came to integration of the two there were fewer hurdles to jump.

Though we each did work on both back and front end, our group had a natural division in our group between those who were more comfortable with the front end and the back end. This was a great working strategy, as it let us each take the lead on certain aspects, while simultaneously learning from others.

#### Technologies Used:

The front end of this project was built using components from Bootstrap, as well as a [sidebar from Bootsnipp](http://bootsnipp.com/snippets/featured/fancy-sidebar-navigation).

We also used Handlebars templates to dynamically update the user's thumbnails
and header.

### Unsolved Problems / Future Goals

- Create a shareable link for a user to give others a direct link to their 'island'
- Create a 'friends' list, or other way to select which users appear in the sidebar
- Download button for images, or a separate 'image' viewstate
- Polishing the CSS, and generally 'prettifying'
- Refactor RESTful routes on both front and back end to be more flexible for different iterations of the application.
