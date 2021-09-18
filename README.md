<div style="display: flex; justify-content: center; align-items: center; flex-direction: column; text-align: center" align="center">
    <h1 align="center" style="text-align: center">POIOS</h1>
    <img style="margin: 20px 0;" src="https://i.imgur.com/Jqr8bQG.png" alt="logo" width="219"/>
    <h3 align="center" style="text-align: center">Student &#8211; Tutor Instant Messaging Application</h3>
<hr>
</div>

## Project Details

### Instruction
Unzip “poios-app-main” and “poios-api-backend-main” </br>
Type “npm install” in the terminal for both directories </br>
Type “npm run start” for both directories. </br>
Run “localhost:8000” on the browser. </br>
Register new account using email and password with proper format to test full functions.

### Links
Demo video: https://youtu.be/fTh-6qXN13A
Frontend: poios.netlify.app
Backend: http://ec2-18-141-141-162.ap-southeast-1.compute.amazonaws.com:3000/


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
- Hosting: Netlify, AWS

### 4. Functional Requirements

- User can register a student account.
- User can register a tutor account.
- User can login to their respective account and manage their information:
  - Both the student and tutor account have an “avatar” and a “bio” section.
  - Student user can choose a subject that they’re interested in.
  - Tutor user can choose a subject that they want to mentor.
- The student and the tutor have the option to communicate 1-on-1 using real-time
  messaging.
- The student and the tutor have the option to communicate 1-on-1 using voice
  call.
- The student and the tutor have the option to communicate 1-on-1 using video
  call.
- Search bar and filter for tutor lists

### 5. Non-functional Requirements

- All the user-inputs should be validated before submission (Pay attention on XSS bugs and SQL Injection)
- The front-end will be hosted on Netlify
- AWS for back-end hosting.
- Write a report

### More specific details provided on [RMIT Canvas](https://rmit.instructure.com/courses/88702/assignments/596400) (Login with RMIT ID)

---

## Implementation

### 1. Deployment

#### - Poios web/mobile tutor instant messaging application, deployed with Netlify: https://poios.netlify.app (`main` branch)

#### - Database hosted with AWS/ Firebase

#### - App demo video: https://youtu.be/fTh-6qXN13A

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
