<div style="display: flex; justify-content: center; align-items: center; flex-direction: column; text-align: center" align="center">
    <h1 align="center" style="text-align: center">POIOS</h1>
    <img style="margin: 20px 0;" src="https://i.imgur.com/Jqr8bQG.png" alt="logo" width="219"/>
    <h3 align="center" style="text-align: center">Student &#8211; Tutor Instant Messaging Application</h3>
<hr>
</div>

## Project Details

### 1. Motivation

Due to the COVID-19 situation, many higher education students struggle with online
learning. They may miss or do not understand some important concepts, or easily lose
their focus during lecture time. This problem is further exacerbated because of the nature
of online lecturing: one lecturer and multiple students. In face-to-face lectures, it is already
hard for the lecturer to answer every student’s question, and the online environment
makes this even harder. Furthermore, technologies “hick-ups” such as slow connectivity,
low quality video stream, inaudible voice stream, etc. also happens frequently due to the
sheer volume of people online in a single virtual space at the same time.
This means they would need more academic help and support outside of class to gain
more knowledge. For some, it can be challenging to find the support they need online,
since traditional tutoring has not been adequately prepared for such a transition to online
learning.

### 2. Topic

We came up with an idea to build a real-time online instant messaging service aimed
specifically at higher education students to connect 1-on-1 with tutors.
With this service, the user needs to register as a student or tutor, then set up their profile
appropriately, such as declaring their major/minor and the subjects they’re interested in.
After logging in, the student user can view the timetable (appointment schedule) of any
tutor to see their schedule and book a 1-on-1 “Study Session” with that tutor when they
are available. The tutor can choose to accept or decline the student’s appointment.
The application provides features including text messaging, voice call, video call, and a
whiteboard (optional), to assist the study session. After finishing the tutoring session, the student
can leave a star rating and constructive feedback for the tutor.

### 3. Technologies

- Front-end stack: ReactJS, PostCSS
- Back-end stack: NodeJS, MongoDB
- Hosting: Netlify, AWS/ Firebase

### 4. Functional Requirements

- User can register a student account.
- User can register a tutor account.
- User can login to their respective account and manage their information:
  - Both the student and tutor account have an “avatar” and a “bio” section.
  - Student user can choose a subject that they’re interested in.
  - Student user can book an appointment with a tutor at the tutor’s available time. No double-booking.
  - When booking an appointment with a tutor, the student decides the duration of the meeting, given there is no conflict with that tutor’s schedule.
  - Tutor user can choose a subject that they want to mentor.
  - Tutor user can manage their appointment schedule.
  - Tutor user can choose to accept or decline an appointment booking from their students.
- The student and the tutor have the option to communicate 1-on-1 using real-time
  messaging.
- The student and the tutor have the option to communicate 1-on-1 using voice
  call.
- The student and the tutor have the option to communicate 1-on-1 using video
  call.
- The student and the tutor can share files to each other.
- (Optional - can implement if we have time) The student and the tutor have access to a real-time online “whiteboard”:
  - They can both post virtual “post-it-notes”.
  - They can both draw on the board.
  - They can both put text boxes on the board.
  - They can both upload images and put them on the board.
  - They can both erase each other’s content on the board.
  - They can both “undo” and “redo” their operations on the board.
- The study session between the student and the tutor must be 1-on-1 to ensure
  quality learning and reduce the risk of technology “hick-ups”, as mentioned in the
  proposal above.
- After a “Study Session”, the student is prompted to rate the tutor and leave an
  optional text message feedback.
- The average rating of a tutor is displayed on that tutor’s profile and cannot be
  modified by the tutor.
- Tutors are ranked by their rating.

### 5. Non-functional Requirements

- All the user-inputs should be validated before submission (Pay attention on XSS bugs and SQL Injection)
- The front-end will be hosted on Netlify
- AWS or Firebase is used for cloud storage and back-end hosting.
- Write a report

### More specific details provided on [RMIT Canvas](https://rmit.instructure.com/courses/88702/assignments/596400) (Login with RMIT ID)

---

## Implementation

### 1. Deployment

#### - Poios web/mobile tutor instant messaging application, deployed with Netlify: https://poios.netlify.app (`main` branch)

#### - Database hosted with AWS/ Firebase

#### - App demo video:

### 2. Coding styles & conventions

#### Front-end

- [HTML & CSS The Right Way](http://htmlcsstherightway.org/)
- [Kuri Front-end Guidelines](https://github.com/kuri-team/front-end-guidelines)

#### Back-end

**crtl /**

#### Further readings

**crtl /**

---

## Work distribution

### Key people

- Instructor: Thanh Ngoc Nguyen, PhD. | [thanh.nguyenngoc@rmit.edu.vn](thanh.nguyenngoc@rmit.edu.vn)
- Student: Mike Vo [@miketvo](https://github.com/miketvo) | [website](https://miketvo.com)
- Student: Nguyen Hoang Linh [@hlinh88](https://github.com/hlinh88)
- Student: Doan Yen Nhi [@doanyennhi](https://github.com/doanyennhi)
- Student: Du Duc Manh [@rider3458](https://github.com/rider3458)
- Student: Nguyen Hoang To Nhu [@lacnham](https://github.com/lacnham)
- Student: Vu Bui Khanh Linh [@Linh-0v0](https://github.com/Linh-0v0)

---

## Submission Instructions

Only 1 of the group members (preferably the group leader) needs to:

- Students must submit in group if they work in group. Please do not submit multiple copies.
- Submit a zip file including frontend and backend, db backup data to Canvas
- There is no demo for this assignment but students must submit a Readme.txt file in which it states all member names and ids, detailed work distribution between team members. Make sure that everyone contributes equally to the whole project and less marks will be given to students who did less work.
- Students who do not deploy the project on cloud will not get 6 marks for deployment. However, they must make a video to demo the functionality of their system and upload it on youtube. Write the URL of the video on the Readme.txt file. No deployment and no video the work can't be marked.
- Students must write a short report (max 20 pages) to justify and explain their application with regard to motivation, relevant alternatives and architecture/technology decision, including design considerations for security. Students include their group member names and their contribution in this report.
- Students include the URL of the deployment system in the Report file.
