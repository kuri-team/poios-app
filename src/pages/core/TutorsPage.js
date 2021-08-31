import { useState } from "react";
import useDetectCloseDropdown from "../../hooks/Header/useDetectCloseDropdown";

import Layout from "../../components/Layout";
import Searchbar from "../../components/Tutors/Searchbar";
import FilterWindow from "../../components/Tutors/FilterWindow";
import TutorListElement from "../../components/Tutors/TutorListElement";
import * as style from "./TutorsPage.module.css";

//'searching function'
const dummyTutors = [
  {
    id: 1,
    name: "Han Sooyoung",
    major: "Literature",
    src: "/media/hansooyoung.jpg",
    subjects: ["Korean Literature", "Creative Writing"],
  },
  {
    id: 2,
    name: "Kieran White",
    major: "Visual Arts",
    src: "/media/hansooyoung.jpg",
    subjects: ["Art History", "Modern Art", "Greek Art & Architecture"],
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
  },
  {
    id: 4,
    name: "Yoo Joonghyuk",
    major: "Computer Science",
    src: "/media/hansooyoung.jpg",
    subjects: ["Algorithm & Analysis", "Introduction to Programming", "Web Programming"],
  },
];

//"searching subjects"
const dummySubject = [
  { id: 1, name: "Alchemy" },
  { id: 2, name: "Astrology" },
  { id: 3, name: "Swordsmanship" },
  { id: 4, name: "Sorcery" },
  { id: 5, name: "Botany" },
  { id: 6, name: "Linguistics" },
  { id: 7, name: "Diplomacy" },
  { id: 8, name: "Linguistics" },
  { id: 9, name: "Diplomacy" },
  { id: 10, name: "Diplomacy" },
  { id: 11, name: "Linguistics" },
  { id: 12, name: "Diplomacy" },
];

const TutorsPage = ({ active }) => {
  //"Search functions"
  const { paramsString } = window.location;
  const tutorQuery = new URLSearchParams(paramsString).get("search-result");
  const filterTutors = (dummyTutors, tutorQuery) => {
    if (!tutorQuery) {
      return dummyTutors;
    }

    return dummyTutors.filter(tutor => {
      const tutorName = tutor.name.toLowerCase();
      return tutorName.includes(tutorQuery);
    });
  };
  const [searchQuery, setSearchQuery] = useState(tutorQuery || "");
  const filteredTutors = filterTutors(dummyTutors, searchQuery);

  //"searching subjects"
  const subjectQuery = new URLSearchParams(paramsString).get("subject-result");
  const filterSubject = (dummySubject, subjectQuery) => {
    if (!subjectQuery) {
      return dummySubject;
    }

    return dummySubject.filter(subject => {
      const subjectName = subject.name.toLowerCase();
      return subjectName.includes(subjectQuery);
    });
  };
  const [filterQuery, setFilterQuery] = useState(subjectQuery || "");
  const filteredSubject = filterSubject(dummySubject, filterQuery);

  //"toggle FilterWindow"
  const [open, setOpen] = useState(false);
  const ref = useDetectCloseDropdown(setOpen, [open]);

  return (
    <Layout className={style["container"]} header footer>
      <div className={style["title"]}>
        <h1>OUR TUTORS</h1>
      </div>
      <div className={style["searchbar-container"]}>
        <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} openState={() => setOpen(!open)} />
      </div>
      <div className={open ? style["filter-window"] : [style["filterWindow"], style["hidden"]].join(" ")} ref={ref}>
        <FilterWindow filterQuery={filterQuery} setFilterQuery={setFilterQuery} filteredSubject={filteredSubject} />
      </div>
      {/*<ul>*/}
      {/*  {filteredTutors.map(tutor => (*/}
      {/*    <li key={tutor.id}>{tutor.name}</li>*/}
      {/*  ))}*/}
      {/*</ul>*/}
      <div className={style["tutor-list"]}>
        {dummyTutors.map(tutor => (
          <TutorListElement
            key={tutor.id}
            src={tutor.src}
            name={tutor.name}
            major={tutor.major}
            subjects={tutor.subjects}
          />
        ))}
      </div>
    </Layout>
  );
};

export default TutorsPage;
