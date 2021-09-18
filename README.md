<div style="display: flex; justify-content: center; align-items: center; flex-direction: column; text-align: center" align="center">
    <h1 align="center" style="text-align: center">POIOS</h1>
    <img style="margin: 20px 0;" src="https://i.imgur.com/Jqr8bQG.png" alt="logo" width="219"/>
    <h3 align="center" style="text-align: center">Student &#8211; Tutor Instant Messaging Application</h3>
<hr>
</div>

## Project Details

### Instruction
1. Download and unzip “poios-app-main” and “poios-api-backend-main” </br>
2. Open both folders on VSCode or your chosen IDE at the same time </br>
3. Type “npm install” in the terminal for both directories </br>
4. Type “npm run start” for both directories so that they are running at the same time. </br>
5. Run “localhost:8000” on a browser after both the backend and frontend have started. </br>
6. Register new account using email and password with proper format to test full functions. If you want to login, use this credential:
- username: Kuri,
- password: 123456

### Links
Demo video: https://youtu.be/fTh-6qXN13A </br>
Frontend:  https://poios.netlify.app </br>
Backend: http://ec2-18-141-141-162.ap-southeast-1.compute.amazonaws.com:3000/ </br>


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
specifically at higher education students to connect with tutors.
With this service, the user needs to register as a student or tutor, then set up their profile
appropriately, such as declaring their major and the subjects they’re interested in.
After logging in, the student user can see the tutor lists and join a chat room of an available tutor.
The application provides features including text messaging, voice call, video call, and screen sharing to assist the study session.

### 3. Technologies

- Front-end stack: ReactJS, PostCSS
- Back-end stack: NodeJS, MongoDB Atlas, Socket.io, ExpressJS
- Hosting: Netlify, AWS

### 4. Functional Requirements

- User can register a student account.
- User can register a tutor account.
- User can login to their respective account and manage their information:
  - Both the student and the tutor can edit their profile on the "My profile" page.
  - Student user can choose a major and subjects that they’re interested in.
  - Tutor user can choose a major and subjects that they want to mentor.
- The student and the tutor have the option to communicate using real-time
  messaging.
- The student and the tutor have the option to communicate using voice
  call.
- The student and the tutor have the option to communicate using video
  call.
- The student and the tutor can share the screen during a video call.
- Search bar and filter for tutor lists

### 5. Non-functional Requirements

- All the user-inputs should be validated before submission (Pay attention on XSS bugs and SQL Injection)
- The front-end will be hosted on Netlify
- AWS for back-end hosting.
- MongoDB Atlas for storage.
- Write a report

### More specific details provided on [RMIT Canvas](https://rmit.instructure.com/courses/88702/assignments/596400) (Login with RMIT ID)

## Work distribution
Due to health problems, the group leader has disappeared twice during the progress (once it last for 1 week) of building the webapp, which causes the slow development progress and we have not been able to deploy the backend. The others had built their features before handed them to the leader. The leader built the backend repo and took responsibility for the implement the others’ works into the backend repo 1 week before the deadline then disappeared without having the jobs done and noticing the other members. Currently, the website’s frontend is hosted on Netlify but it does not have full functions due to the lack of data from backend. Full functions can only be tested on localhost. Please consider the situation of our group.

- Doan Yen Nhi : Developer, Github Administrator
- Du Duc Manh : Developer, Report writer
- Nguyen Hoang Linh : Developer, Github Administrator
- Nguyen Hoang To Nhu : Developer, UI Designer
- Tuong-Minh “Mike” Vo : Developer, UI Designer, Leader
- Vu Bui Khanh Linh : Developer, UI Designer


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
