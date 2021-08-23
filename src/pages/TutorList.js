import Layout from "../components/Layout";
import Searchbar from "../components/TutorList/Searchbar";
import TutorListElement from "../components/TutorList/TutorListElement";
import { useState } from "react";
import * as style from "./TutorList.module.css";

//currently testing 'searching function'
const dummyTutors = [
  { id: 1, name: "Eula" },
  { id: 2, name: "Mona" },
  { id: 3, name: "Jean" },
];

const TutorList = () => {
  //Search functions
  const { search } = window.location;
  const query = new URLSearchParams(search).get("search-result");

  const filterTutors = (dummyTutors, query) => {
    if (!query) {
      return dummyTutors;
    }

    return dummyTutors.filter(tutor => {
      const tutorName = tutor.name.toLowerCase();
      return tutorName.includes(query);
    });
  };

  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredTutors = filterTutors(dummyTutors, searchQuery);

  return (
    <Layout className={style["container"]} header footer>
      <div className={style["searchbar"]}>
        <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
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
