import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

import { GlobalState } from "../../GlobalState";
import Layout from "../../components/Layout";
import Searchbar from "../../components/Tutors/Searchbar";
import FilterWindow from "../../components/Tutors/FilterWindow";
import TutorListElement from "../../components/Tutors/TutorListElement";
import useDetectCloseDropdown from "../../hooks/useDetectCloseDropdown";
import * as style from "./TutorsPage.module.css";

// searching function
const tutors = [
  {
    id: 1,
    name: "Han Sooyoung",
    major: "Literature",
    src: "/media/hansooyoung.jpg",
    subjects: ["Korean Literature", "Creative Writing"],
    status: "busy",
  },
  {
    id: 2,
    name: "Kieran White",
    major: "Visual Arts",
    src: "/media/hansooyoung.jpg",
    subjects: ["Art History", "Modern Art", "Greek Art & Architecture"],
    status: "busy",
  },
  {
    id: 3,
    name: "Kim Dokja",
    major: "Business Management",
    src: "/media/hansooyoung.jpg",
    subjects: [
      "Marketing",
      "Digital Business",
      "Human Resources Management",
      "Microeconomics",
      "Macroeconomics",
      "Financial Accounting",
    ],
    status: "available",
  },
  {
    id: 4,
    name: "Yoo Joonghyuk",
    major: "Computer Science",
    src: "/media/hansooyoung.jpg",
    subjects: ["Algorithm & Analysis", "Introduction to Programming", "Web Programming"],
    status: "busy",
  },
  {
    id: 5,
    name: "Belladonna Davenport",
    major: "Design Studies",
    src: "/media/hansooyoung.jpg",
    subjects: ["Graphic Design"],
    status: "available",
  },
  {
    id: 6,
    name: "Neyra Elena Darcy",
    major: "Psychology",
    src: "/media/hansooyoung.jpg",
    subjects: ["Cognitive Psychology", "Mental Health Studies"],
    status: "available",
  },
];

const TutorsPage = () => {
  //manage state(logged, role) in all websites
  const state = useContext(GlobalState);
  const [isLogged, setIsLogged] = state.userApi.isLogged;
  const [isTutor, setIsTutor] = state.userApi.isTuTor;
  console.log(state);

  {
    if (isTutor) {
      return <Redirect to="/core/chat" />;
    }
    if (isLogged === false) {
      return <Redirect to="/auth/login" />;
    }
  }

  const [subjects, setSubjects] = useState([]);
  const [majors, setMajors] = useState([]);
  const [tutors, setTutors] = useState([]);

  const getFields = () =>
    axios.get("/core/fields-of-study").then(res => {
      setMajors(res.data[0]);
      setSubjects(res.data[1]);
    });

  const getTutors = () => {
    axios.get("/core/tutors").then(res => {
      setTutors(res.data);
    });
  };

  useEffect(() => {
    getFields();
    getTutors();
  }, []);

  //"Search functions"
  const { paramsString } = window.location;
  //"searching subjects"
  const subjectQuery = new URLSearchParams(paramsString).get("subject-result");
  const filterSubject = (subjects, subjectQuery) => {
    if (!subjectQuery) {
      return subjects;
    }

    return subjects.filter(subject => {
      const subjectName = subject.name.toLowerCase();
      return subjectName.includes(subjectQuery);
    });
  };
  const [filterQuery, setFilterQuery] = useState(subjectQuery || "");
  const filteredSubject = filterSubject(subjects, filterQuery);

  //searching tutors
  const tutorQuery = new URLSearchParams(paramsString).get("search-result");
  const filterTutors = (tutors, tutorQuery) => {
    if (!tutorQuery) {
      return tutors;
    }
    return tutors.filter(tutor => {
      const tutorName = tutor.name.toLowerCase();
      return tutorName.includes(tutorQuery);
    });
  };
  const [searchQuery, setSearchQuery] = useState(tutorQuery || "");
  const filteredTutors = filterTutors(tutors, searchQuery);
  const [open, setOpen] = useState(false);
  const ref = useDetectCloseDropdown(setOpen, [open]);

  return (
    <Layout className={style["container"]} header footer>
      <div className={style["title"]}>
        <h1>CHAT ROOMS</h1>
      </div>
      <div className={style["cut-width-container"]} ref={ref}>
        <div className={style["searchbar-container"]}>
          <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} openState={() => setOpen(!open)} />
        </div>

        <div className={open ? style["filter-window"] : [style["filterWindow"], style["hidden"]].join(" ")}>
          <FilterWindow
            filterQuery={filterQuery}
            setFilterQuery={setFilterQuery}
            filteredSubject={filteredSubject}
            majors={majors}
          />
        </div>
      </div>

      <div className={style["big-container"]}>
        <div className={[style["tutor-list"], style["x"], style["mandatory-scroll-snapping"]].join(" ")} dir="ltr">
          {filteredTutors.map((tutor, key) => (
            <div className={style["tutor"]} key={key}>
              <TutorListElement
                key={tutor.id}
                src={tutor.src}
                name={tutor.name}
                major={tutor.major}
                subjects={tutor.subjects}
                status={tutor.status}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TutorsPage;
