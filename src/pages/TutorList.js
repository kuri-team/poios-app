import Layout from "../components/Layout";
import Searchbar from "../components/TutorList/Searchbar";
import FilterWindow from "../components/TutorList/FilterWindow";
import TutorListElement from "../components/TutorList/TutorListElement";
import { useState } from "react";
import * as style from "./TutorList.module.css";

//'searching function'
const dummyTutors = [
  { id: 1, name: "Eula" },
  { id: 2, name: "Mona" },
  { id: 3, name: "Jean" },
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

const TutorList = () => {
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
  const [isOn, setIsOn] = useState(false);
  const displayState = () => {
    setIsOn(!isOn);
    return isOn;
  };

  return (
    <Layout className={style["container"]} header footer>
      <div className={style["searchbar-h1"]}>
        <h1>OUR TUTORS</h1>
      </div>
      <div className={style["searchbar-container"]}>
        <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} displayState={displayState} />
      </div>
      {isOn ? (
        <div className={style["filter-window"]}>
          <FilterWindow filterQuery={filterQuery} setFilterQuery={setFilterQuery} filteredSubject={filteredSubject} />
        </div>
      ) : null}
      {/*<ul>*/}
      {/*  {filteredTutors.map(tutor => (*/}
      {/*    <li key={tutor.id}>{tutor.name}</li>*/}
      {/*  ))}*/}
      {/*</ul>*/}
      <div className={style["tutor-list"]}>
        <TutorListElement />
        <TutorListElement />
        <TutorListElement />
        <TutorListElement />

        <TutorListElement />
        <TutorListElement />
        <TutorListElement />
        <TutorListElement />

        <TutorListElement />
        <TutorListElement />
        <TutorListElement />
        <TutorListElement />
      </div>
    </Layout>
  );
};

export default TutorList;
