# practice-log
An online app to create a musical practice schedule, set practice goals, log practices, remind you to practice, kick out practice stats and write pertinent information regarding your practice sessions or goals.

The idea is to also include a way to upload audio, video, pictures or pdfs relating to your practice, so you can see progress or upload sheet music/backing tracks to practice anywhere using your phone or computer.

I will be using JavaScript, Express and MongoDB, with CSS and EJS for webpages. Jest for testing, trying to use TDD for the functions and unit testing.

I will deploy the app on Heroku.

**User Story**

Basic:

User must be able to set up an account and sign in
User must be able to create a practice goal
User must be able to create a new practice session
User must be able to view practices and goals

Intermediate:

User must be able to add photos
User must receive reminders for practices
User must be able to link with bandmates
User must be able to create a setlist
User must be able to select a generic goal and be given a routine

Advanced:

User must be able to add audio
User must be able to add videos
User can receive rewards for practice goals
User receives reminders on how far they've come (start vs finish video?)
User setlist links to Spotify
User can view 5 tuition videos per month free
User can set band interest to link with local musicians

Premium features:

Users can create tuition material
Users can view unlimited tuition materials
Users can comment/like/save practice material from other users


For the basic user story, we will need a few basic model classes:

User: username, password, instrument, goals
Goal: practices, progress, schedule
Practice: time, comment, media


Our basic views should be along the lines of:

index (sign in/sign up)
signup
login
sessions/new
home - user homepage w/sessions
users/:id - profile (view all goals and practices)
users/goals/:id - view user goals
goals/new - add goal
users/practices/:id - view user practices
practices/new - add practice
settings/:id - change settings
goals/:id - view individual goal
practices/:id - view individual practice session


